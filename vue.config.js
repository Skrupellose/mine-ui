const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.js',
      filename: 'index.html'
    }
  },
  //拓展webpack配置，使packages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'package')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        //修改选项
        return options
      })
  }
}