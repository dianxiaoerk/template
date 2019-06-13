/* 生产模式配置 */

/* 打包scss文件为css文件  并使用link标签引入到页面中 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin") //scss文件转化为css文件  然后使用link标签 供index.html文件去引入
const webpack = require("webpack")
const path = require("path"); //引入路径配置  

module.exports = {
  /* 出口文件配置 */
  output: {
    path: path.resolve(__dirname, "../app/js"), //打包后文件路径
    filename: "[name].js" //打包后的名字
  },
  /* 插件配置 */
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css'
    })
  ],
  /* 依赖配置 */
  module: {
    rules: [{
      test: /\.scss$/,
      /*use: [cssLoader.loader, 'css-loader', 'sass-loader'] // 生产模式下不需要样式再注入到页面  所以不需要再去配置style-loader */
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: ""
        },
        "css-loader",
        "sass-loader"
      ]
    }]
  },
};