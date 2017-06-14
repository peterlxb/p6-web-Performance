## 网站性能优化项目
利用课程中学到的知识优化一个pizza website



###Part 1: Gulp工具的使用
* 全局安装 gulp：
* $ npm install --global gulp
* 作为项目的开发依赖（devDependencies）安装：
* $ npm install --save-dev gulp
* 运行 gulp task：
* $ gulp minify
* 现有的gulpfile文件中只包含了对js和css文件的压缩
###Part 2: index.html和views/js/main.js中的优化

#### index.html中的优化
* 首先优化了文件头部的CSS样式文件，因为CSS默认是阻塞渲染的，需要尽快加载完，源文件中的link标签会产生网络请求
  所以优化的思路:源文件中的样式表体积不大，直接将 style.css 的样式表内联在 HTML 文档内。
* 对于页面中的JavaScript脚本，因为外部脚本的载入也会增加网络请求，而且脚本会阻止 DOM 的构建，这样就会大大的延缓首次渲染。
  有一些方法能够避免这个问题，例如为 <script> 添加 async 属性，或者将脚本移到 <body> 的底部。
* 页面中的某些图片过大，需要使用PS进行压缩成合适的尺寸，去掉多余的像素。
#### main.js中对于pizza页面的优化
* 使用 getElementById() 来替换querySelector()方法提高获取元素的效率！
* 当要大量获取网页元素的时候使用 getElementsByClassName 来提高获取的速度。
* 对于源文件中一些重复获取的元素，可以只获取一次将它保存在一个变量中，其它地方都通过访问这个变量来获取需要的值
* 对于一些循环中复杂的计算 移到循环外部，避免强制布局
