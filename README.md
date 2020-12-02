# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 目录结构划分
```
src
|
|--assets:资源
| |--img:图片
| |--css:层叠样式表
| | |--mormalize.css（可复用）
| | |--base.css（可复用）
|--components:公共组件
| |--common:完全公共组件
| |--content:当前项目业务相关公共组件
|--views:页面组件
|--router:路由
|--store:状态管理
|--network:网络请求
|--common:公共 JS 文件（公共常量、公共方法）
```

## 12.2 工作日志
***一、初始化工作***  
&nbsp;&nbsp;1、创建目录结构  
&nbsp;&nbsp;2、添加mormalize.css、base.css  
&nbsp;&nbsp;3、创建src/vue.config.js————设置别名  
&nbsp;&nbsp;&nbsp;&nbsp;(1) 脚手架默认已经设置了src目录为@  
&nbsp;&nbsp;&nbsp;&nbsp;(2) router和store不需要经常导入，暂时不需要设置  
&nbsp;&nbsp;4、添加 .editorconfig 统一编码风格  
***二、业务工作***  
&nbsp;&nbsp;1、导入已经写好的TabBar组件  
&nbsp;&nbsp;2、更换标签页图标（public/index.html）  
***三、日常踩坑***  
**&nbsp;&nbsp;1、Unknown custom element <router-view>**  
&nbsp;&nbsp;解决:没有在main.js中引入和使用vue-router插件  
**&nbsp;&nbsp;2、Uncaught TypeError: Cannot read property 'matched' of undefined**  
&nbsp;&nbsp;解决:在main.js中引入和使用路由的index.js  
**&nbsp;&nbsp;3、router-view没有渲染**  
&nbsp;&nbsp;解决:在router/index.js下，查看路由分离对象routes，并在router对象中引入routes（注意：是routes，不是routers） 