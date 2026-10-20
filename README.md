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

npm run pre

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




### easy-cli
> vue-cli4
```
├── README.md
├── babel.config.js  
├── bin
│   └── start.sh  
├── dist  
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
├── mock
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
├── public 
│   ├── index.html
│   └── layoutConfig
│       ├── ja.html
├── src
│   ├── App.vue 
│   ├── assets  
│   │   ├── img
│   │   └── style
│   ├── common 
│   │   └── utils
│   ├── components  
│   │   └── floorRecommend
│   ├── constants   
│   │   └── eventsEnum.js
│   ├── lang    
│   │   ├── en_US
│   │   ├── in_ID
│   │   └── index.js
│   ├── lib    
│   │   └── index.js
│   ├── main.js 
│   ├── router  
│   │   └── index.js
│   ├── rpc   
│   │   └── index.js
│   ├── service  service
│   │   └── index.js
│   ├── theme  
│   │   └── index.js
│   └── views   
│       ├── Home.vue
│       └── Product.vue
├── test   
│   ├── jest.conf.js
│   ├── setup.js
│   └── unit
│       └── floors
├── .eidtorconfig    
├── .env.development   
├── .env.pre    
├── .env.production    
├── .eslintrc.js   
├── .gitignore   
├── .stylelintignore   
├── .stylelintrc.json  
├── version.js    
└── vue.config.js   

```
##### 1、publish -- 
> public/layoutConfig
```html
├── public // 落地页配合，落地页不同模块拆分到layoutConfig目录下
│   ├── index.html
│   └── layoutConfig // 埋点等各种资源拆分成不同模块引入
│       └── ja.html
```
> index.html${ require('html-loader!./layoutConfig/watchtower.html') }html
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

##### 2、constants -- 
> eventsEnum.js
```javascript
export const EVENTS_ENUM = {
  ON_CLOSE_TOP_APP_BAR: 'ON_CLOSE_TOP_APP_BAR',
  ON_CLICK_HEADER_TAB: 'ON_CLICK_HEADER_TAB'
}

```
