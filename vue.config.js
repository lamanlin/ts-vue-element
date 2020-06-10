const path = require('path')

const devServerPort = 8888
const name = 'Typescript Demo'

module.exports = {
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    //     [process.env.VUE_APP_BASE_API]: {
    //         target: `http://localhost:${mockServerPort}/mock-api/v1`,
    //         changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    //         // ws: true,// proxy websockets
    //         pathRewrite: { // pathRewrite方法重写url
    //             ['^' + process.env.VUE_APP_BASE_API]: ''
    //         }
    //     }
    // }
  },
  lintOnSave: false,

  chainWebpack(config) {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)

    // https://webpack.js.org/configuration/devtool/#development
    config.when(process.env.NODE_ENV === 'development', (config) => config.devtool('cheap-source-map'))

    config.resolve.alias.set('@', path.resolve('src')).set('@assets', path.resolve('src/assets'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/styles/variables.less')
      ]
    }
  }
}
