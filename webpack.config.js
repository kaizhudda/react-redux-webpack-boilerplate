var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader" // transpile from ES6 to Vanila JS for Browsers
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};