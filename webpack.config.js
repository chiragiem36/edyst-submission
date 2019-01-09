const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  entry: {
    main: __dirname + '/src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    // publicPath: '/dist/'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
