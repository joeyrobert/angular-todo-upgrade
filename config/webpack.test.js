var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
  entry: {},
  devtool: 'inline-source-map',
  output: {},
  resolve: {
    alias: {
      'bootstrap-app': path.join(__dirname, '..', 'src', 'bootstrap-ng1-ng2.ts')
    }
  }
});


