/* 生产模式配置 */

const cssLoader = require('mini-css-extract-plugin') //scss文件转化为css文件  然后使用link标签 供index.html文件去引入

module.exports = {
  /* 出口文件配置 */
  output: {
    path: __dirname + '/app', //打包后文件路径
    filename: '[name].js' //打包后的名字
  },
  /* 依赖配置 */
  module: {
    rules: [{
      test: /\.scss$/,
      /*use: [cssLoader.loader, 'css-loader', 'sass-loader'] // 生产模式下不需要样式再注入到页面  所以不需要再去配置style-loader */
      use: [{
        loader: cssLoader.loader,
        options: '',
      }, 'css-loader', 'sass-loader']
    }]
  },

}