/* eslint-disable no-undef */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  assets: 'assets',
  src: path.resolve(__dirname, '../src'),
};
const filename = (extension) => {
  return (`[name].[fullhash]${extension}`);
};

module.exports = {
  devtool: false,
  mode: 'production',
  module: {
    rules:
      [
        {
          generator: { filename: `${PATHS.assets}/img/${filename('[ext]')}` },
          test: /\.(png|jpe?g|gif|svg)$/iu,
        },
        {
          dependency: { not: ['url'] },
          test: /\.(s[ac]|c)ss$/iu,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '' },
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: '@import "variables"; @import "mixins";',
                sassOptions: {
                  includePaths: [`${PATHS.src}/sass`],
                },
              },
            },
          ],
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
