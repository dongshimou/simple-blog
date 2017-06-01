# simple-blog

> a vue.js blog export to github.io

## 编写文章

在`posts`目录下,编写md文件,将会自动创建json文件并同步到`static/posts/`.
格式参考`posts/test.md`,构建的网页将会读取所写的md文件.

## 添加音乐

在`static/music/`目录下,添加`.mp3`文件即可,并重新构建,将会自动创建`list.json`,
构建的网页将会播放整个目录下的音乐.

## 发布网站

运行构建脚本`npm run build`,所有文件将会生成在`dist`目录下,将所有的文件复制到
你的`xxx.github.io`,或者直接将`dist`目录作为你`xxx.github.io`的本地git目录,每次
构建之后,运行一次git发布流程即可.

## Build Setup

nodejs >= `v6.9.1`

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9090
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 更多自定义

vue相关知识请参考 [vue.js](https://cn.vuejs.org/) 

web相关知识请参考 [MDN](https://developer.mozilla.org/zh-CN/)