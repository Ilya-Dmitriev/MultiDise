/* eslint-disable no-undef */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  assets: 'assets',
  dist: path.resolve(__dirname, './dist'),
  src: path.resolve(__dirname, './src'),
};

const filename = (extension) => {
  return (`[name].[hash]${extension}`);
};

module.exports = {
  devtool: 'sourse-map',
  mode: 'production',
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
  ],
  target: 'browserslist',
};
