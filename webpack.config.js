const htmlWebpackPlugin = require('html-webpack-plugin') // 导入html模板插件
const webpackMerge = require('webpack-merge') //导入合并插件


/* 根据命令进行不同的模式操作  配置模式  生产/开发*/
const configMode = (mode) => {
  return require(`./build-utils/webpack.${mode}.js`)
}

module.exports = ({
  mode
}) => {
  return webpackMerge({
    mode,
    /* 入口文件配置 */
    entry: {
      index: './src/js/index.js'
    },

    /* 插件配置 */
    plugins: [
      new htmlWebpackPlugin({ //html文件模板
        template: './src/view/index.html', //模板文件名字
        filename: '../view/index.html', //输出文件的名字及目录
        chunks: ['index'], //配置需要引入的js文件  不配置默认引入全部的js文件
        /*    excludeChunks: [],//配置不需要引入的js文件和chunks相反 */

      }),
    ],
    /* 依赖项配置 */
    module: {
      rules: [
        /* 配置sass使用 */
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        /* 配置babel  es6=>es5 */
        {
          test: /\.js$/,
          exclude: /node_modules/, //忽略node_modules中的js文件
          use: [{
            loader: 'babel-loader', //识别es6语法
            options: {
              presets: ['@babel/preset-env'] //es6转换es5工具
            }
          }]
        }
      ]
    }
  }, configMode(mode))
}