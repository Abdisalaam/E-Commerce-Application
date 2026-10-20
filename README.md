# vue-template-project

## registry setup
```
npm config set registry https://Abdisalaam/
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
预发环境：
npm run pre
生产环境：
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### 代码规范


### 基于easy-cli生成的vue工程目录结构
> 该模板是基于vue-cli4搭建的模板工程
```
├── README.md
├── babel.config.js   // bebel配置
├── bin
│   └── start.sh  // 在线打包工程启动脚本
├── dist   // 打包输出目录，按版本控制
│   ├── 20200805
│   │   ├── css
│   │   ├── img
│   │   └── js
│   ├── 20200806
│   │   ├── css
│   │   ├── img
│   │   └── js
│   ├── 20200807
│   │   ├── css
│   │   ├── img
│   │   └── js
│   └── index.html
├── mock // 数据mock配置
│   ├── beta-color.jd.id
│   │   ├── index.js
│   │   └── json
│   ├── config.js
│   ├── index.js
│   └── m.jd.id
│       ├── index.js
│       └── json
├── package-lock.json
├── package.json
├── public // 落地页配合，落地页不同模块拆分到layoutConfig目录下
│   ├── index.html
│   └── layoutConfig
│       ├── ja.html
├── src
│   ├── App.vue // 入口页面
│   ├── assets  // 静态资源目录
│   │   ├── img
│   │   └── style
│   ├── common // 公共资源目录
│   │   └── utils
│   ├── components  // 组件目录
│   │   └── floorRecommend
│   ├── constants   // 常量配置
│   │   └── eventsEnum.js
│   ├── lang    // 多语言配置
│   │   ├── en_US
│   │   ├── in_ID
│   │   └── index.js
│   ├── lib    // 引用的外部官方js库
│   │   └── index.js
│   ├── main.js // 入口文件
│   ├── router  //  路由配置
│   │   └── index.js
│   ├── rpc   //  rpc调用，直接调后端接口
│   │   └── index.js
│   ├── service   //  对RPC返回数据的二次峰值，所有页面请求后台的数据都走service
│   │   └── index.js
│   ├── theme  // 主题配置
│   │   └── index.js
│   └── views   // 不同路由入口页面
│       ├── Home.vue
│       └── Product.vue
├── test   // 单元测试配置目录
│   ├── jest.conf.js
│   ├── setup.js
│   └── unit
│       └── floors
├── .eidtorconfig    // 编辑器缩进相关配置
├── .env.development    // 开发环境-环境变量
├── .env.pre    // 预发环境-环境变量
├── .env.production    // 生产环境-环境变量
├── .eslintrc.js   // eslint配置
├── .gitignore   // git提交忽略的文件
├── .stylelintignore   // 样式校验忽略的文件
├── .stylelintrc.json  // 样式校验配置
├── version.js    // 打包版本控制相关配置
└── vue.config.js     // webpack相关配置

```
##### 1、publish -- 落地页说明
> 结构如下，埋点等各种资源拆分成不同模块引入，放到public/layoutConfig目录下
```html
├── public // 落地页配合，落地页不同模块拆分到layoutConfig目录下
│   ├── index.html
│   └── layoutConfig // 埋点等各种资源拆分成不同模块引入
│       └── ja.html
```
> index.html中以类似${ require('html-loader!./layoutConfig/watchtower.html') }的方式引入不同模块的html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
<noscript>
  <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
${ require('html-loader!./layoutConfig/ja.html') }
</body>
</html>
```

##### 2、constants -- 常量配置说明
> 常量文件名采用驼峰名，如:eventsEnum.js
> 代码中常量Key都才有大小，通过下划线连接，如：
```javascript
// 事件类型枚举
export const EVENTS_ENUM = {
  // 关闭顶部app bar
  ON_CLOSE_TOP_APP_BAR: 'ON_CLOSE_TOP_APP_BAR',
  // 头部tab点击
  ON_CLICK_HEADER_TAB: 'ON_CLICK_HEADER_TAB'
}

```