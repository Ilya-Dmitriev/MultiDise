/* eslint-disable no-undef */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  assets: 'assets',
  dist: path.resolve(__dirname, './dist'),
  src: path.resolve(__dirname, './src'),
};

const webpack = require('webpack');

const filename = (extension) => {
  return (`[name]${extension}`);
};

module.exports = {
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    port: 8_281,
  },
  devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  module: {
    rules:
      [
        {
          generator: { filename: `${PATHS.assets}/img/${filename('[ext]')}` },
          test: /\.(png|jpe?g|gif|svg)$/iu,
        },
      ],
  },
  output: {
    filename: filename('.js'),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: filename('.css') }),
    new webpack.SourceMapDevToolPlugin({ filename: '[file].map' }),
  ],
  target: 'web',
};
