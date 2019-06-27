const path = require('path');
const nodeExternales = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternales()], // 防止node_modules中的模块被打包
  module: {
    rules: [{
      test: /.css?$/,
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            mode: 'local',
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        }
      }]
    }]
  }
};

module.exports = merge(baseConfig, serverConfig);