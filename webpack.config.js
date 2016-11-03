const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = {
  entry: path.join(__dirname, 'client'),
  output: {
    path: path.join(__dirname, 'server', 'public'),
    filename: 'bundle.js'
  },
    resolve: {
    extensions: ['.jsx', '.js', '']
  },
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};

//config for dev setup
const devConfig = {
  devtool: 'source-maps',
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true
  }
}

const prodConfig = {
  devtool: 'source-maps',
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     beautify: false,
  //     comments: false,
  //     compress: {
  //       warnings: false
  //     },
  //     mangle: {
  //       except: ['$'],
  //       screw_ie8: true,
  //       keep_fnames: true
  //     }
  //   })
  // ]
}

const target = process.env.npm_lifecycle_event;
switch (target) {
  case 'dev':
    module.exports = merge(common, devConfig);
    break;
  default:
    module.exports = merge(common, prodConfig);
    break;
}
