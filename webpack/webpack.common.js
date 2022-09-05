/* eslint-disable indent */
/* eslint-disable no-undef */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  assets: 'assets',
  dist: path.resolve(__dirname, '../dist'),
  src: path.resolve(__dirname, '../src'),
};

const plugins = [
  new HTMLWebpackPlugin({ template: `${PATHS.src}/index.html` }),
  new CleanWebpackPlugin(),
  // new CopyWebpackPlugin({
  //     patterns: [
  //         // { from: `${PATHS.assets}/img`, to: `${PATHS.assets}/img` },
  //         { from: `${PATHS.assets}/fonts`, to: `${PATHS.assets}/fonts` },
  //     ],
  // }),
];

module.exports = {
  context: PATHS.src,
  entry: {
    project: './index.tsx',
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/u,
        test: /\.([jt]sx?|mjsx)$/u,
        use: ['babel-loader'],
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          enforce: true,
          name: 'vendors',
          test: /node_modules/u,
        },
      },
    },
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
  },
  plugins,
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ],
  },
};
