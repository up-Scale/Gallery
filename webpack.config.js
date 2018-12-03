const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const nodeExternals = require('webpack-node-externals');

module.exports = [{
  entry: `${SRC_DIR}/index.js`,
  mode: 'development',
  output: {
    filename: 'gallerybundle.js',
    path: DIST_DIR
  },
  module: {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CompressionPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin()
  ]
}, {
  entry: path.join(__dirname, '/server/index.js'),
  target: 'node',
  mode: 'development',
  node: {
      __dirname: false,
      __filename: false,
  },
  externals: [nodeExternals()],
  output: {
    filename: 'serverbundle.js',
    path: path.join(__dirname, '/server')
  },
  module : {
    rules : [
      {
        test : /\.js/,
        include : SRC_DIR,
        loader: 'babel-loader'
      }
    ],
  },
    plugins: [
      new CompressionPlugin(),
      new UglifyJsPlugin()
  ]
}];