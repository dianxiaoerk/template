/* 开发模式配置 */

module.exports = {
  /* 输出路径及文件名配置 */
  output: { //开发模式下只需要一个js名称就行了  因为他不需要打包出来 
    filename: 'bunld.js'
  },
  /* 服务器启动配置 */
  devtool: 'inline-source-map', //js代码位置映射
  devServer: {
    contentBase: './src/view/', //配置服务器启动时打开的路径
  },
}