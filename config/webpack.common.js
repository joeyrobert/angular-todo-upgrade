var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SplitByPathPlugin = require('webpack-split-by-path');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'app': './src/bootstrap-ng1-ng2.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['app']
    // }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new SplitByPathPlugin([
      {
        name: 'vendor',
        path: path.join(__dirname, '..', 'node_modules')
      }
    ])
  ]
};
