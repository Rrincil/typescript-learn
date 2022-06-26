//引入一个包
const path = require('path');
//引入html 插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",
  //指定打包文件所在目录
  output:{
    path:path.resolve(_dirname,'dist'),
    //打包后的文件
    filename:'boundles',

    //告诉webpack不不使用箭头
    environment:{
      arrowFunction:false
    }
  },
  
}