const PRODUCTION_NODE_ENV = 'production'
const { postcssRTLCSS } = require("postcss-rtlcss");
// 打印环境和版本信息
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
        // 这里的选项会传递给 postcss-loader
        plugins: [
          postcssRTLCSS({safeBothPrefix: true})
        ]
      }
    }
  },
  // 通过链式修改webpack配置
  chainWebpack: config => {
    // 是否分析依赖
    if (process.env.VUE_APP_ANALYZER) {
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    // 去掉预加载
    config.plugins.delete("prefetch");
    // 修改HtmlWebpackPlugin配置
    config.plugin('html')
      .tap(args => {
        args[0].template = './public/index.html'
        // 配置不删除注释，引入头尾要用
        if (args && args[0] && args[0].minify) {
          args[0].minify.removeComments = false
          args[0].minify.removeAttributeQuotes = false;
        }
        return args || []
      })
    // 修改CopyWebpackPlugin配置
    config.plugin('copy')
      .tap(args => {
        // copy静态资源排除layoutConfig目录下所有文件
        if (args && args[0] && args[0][0]) {
          args[0][0].ignore.push('layoutConfig/**/*')
        }
        return args
      })
    // vender拆分
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
    // svg打包配置
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    // 添加要替换的 loader
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
        changeOrigin: true, // 是否改变域名
        ws: true,
        pathRewrite: {
          // 路径重写
          '/car/api/': '/'
        }
      },
      '/rbi/vop': {
        target: 'http://12.60.199.26'
      }
    }
  }
}
