/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src') + '/examples/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist') + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1']
        }
      },
      {
        test: /\.scss$|.css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};