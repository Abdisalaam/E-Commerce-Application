const PRODUCTION_NODE_ENV = 'production'
const { postcssRTLCSS } = require("postcss-rtlcss");
module.exports = {
  outputDir: `dist`,
  indexPath: 'index.html',
  publicPath: '/',
  runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== PRODUCTION_NODE_ENV,
  css: {
    sourceMap: process.env.NODE_ENV !== PRODUCTION_NODE_ENV,
    extract: false,
    // extract: {
    //   filename: 'style/[name].css'
    // }
    loaderOptions: {
      postcss: {
        plugins: [
          postcssRTLCSS({safeBothPrefix: true})
        ]
      }
    }
  },
  chainWebpack: config => {
    if (process.env.VUE_APP_ANALYZER) {
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    config.plugins.delete("prefetch");
    config.plugin('html')
      .tap(args => {
        args[0].template = './public/index.html'
        if (args && args[0] && args[0].minify) {
          args[0].minify.removeComments = false
          args[0].minify.removeAttributeQuotes = false;
        }
        return args || []
      })
    config.plugin('copy')
      .tap(args => {
        if (args && args[0] && args[0][0]) {
          args[0][0].ignore.push('layoutConfig/**/*')
        }
        return args
      })
    config.optimization.splitChunks({
      chunks: "all",
      minSize: 150000,
      maxSize: 3000000,
      maxInitialRequests: 5,
      maxAsyncRequests: 20,
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `split.${packageName.replace("@", "")}`;
          },
          priority: 10
        }
      }
    });
    config.module
      .rule("fonts")
      .test(/.(ttf|otf|eot|woff|woff2)$/)
      .use("url-loader")
      .loader("url-loader")
      .tap(options => {
        options = {
          name: '/dist/[name].[ext]',
        }
        return options
      })
      .end();
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10000 }))
  },


  devServer: {
    // host: 'localhost',
    port: 8081,
    https: false,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/car/api': {
        target: 'http://Abdisalaam.Abdisalaam-test.sa/mock/',
        changeOrigin: true, 
        ws: true,
        pathRewrite: {          
          '/car/api/': '/'
        }
      },
      '/rbi/vop': {
        target: 'http://12.60.199.26'
      }
    }
  }
}
