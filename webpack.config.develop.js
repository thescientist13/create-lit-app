/* eslint-env node */
const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  mode: 'development',

  devtool: 'cheap-module-source-map',
  
  output: {
    publicPath: '/'
  },

  devServer: {
    overlay: true,
    port: 3000,
    historyApiFallback: true,
    stats: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        secure: false
      },
      '/auth': {
        target: 'http://localhost:8000/',
        secure: false
      }
    }
  }

});