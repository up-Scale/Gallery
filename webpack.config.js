const path = require('path');
const webpack = require('webpack');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const nodeExternals = require('webpack-node-externals');

module.exports = [{
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'gallerybundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader: 'babel-loader'
      }
    ]
  }
}, {
  entry: path.join(__dirname, '/server/index.js'),
  target: 'node',
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
  }
}];