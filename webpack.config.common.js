/* eslint-env node */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {

  context: join(__dirname, './src'),

  entry: './lit-app.js',

  output: {
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: join(__dirname, 'node_modules')
      // TODO
      // }, {
      //   test: /\.js$/,
      //   // We need to transpile Polymer, do not exclude node_modules
      //   loader: 'babel-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, 
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'none'
    })
  ]

};