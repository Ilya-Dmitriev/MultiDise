/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV === 'development';
const filename = (extension) =>
    isDevelopment ? `[name]${extension}` : `[name].[hash]${extension}`;

const PATHS = {
    assets: 'assets',
    dist: path.resolve(__dirname, './dist'),
    src: path.resolve(__dirname, './src'),
};

const plugins = [
    new HTMLWebpackPlugin({ template: `${PATHS.src}/index.html` }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            // { from: `${PATHS.assets}/img`, to: `${PATHS.assets}/img` },
            { from: `${PATHS.assets}/fonts`, to: `${PATHS.assets}/fonts` },
        ],
    }),
    new MiniCssExtractPlugin({ filename: filename('.css') }),
];

if (isDevelopment) {
    plugins.push(new webpack.SourceMapDevToolPlugin({ filename: '[file].map' }));
}

module.exports = {
    context: PATHS.src,
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        hot: true,
        port: 8281,
    },
    devtool: isDevelopment ? 'eval-cheap-module-source-map' : false,
    entry: {
        project: './index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                exclude: /(node_modules|bower_components)/u,
                test: /\.(js|jsx|mjsx)$/u,
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
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "variables";',
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src/sass')],
                            },
                        },
                    },
                ],
            },
            {
                generator: { filename: `${PATHS.assets}/img/${filename('[ext]')}` },
                test: /\.(png|jpe?g|gif|svg)$/iu,
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
        filename: filename('.js'),
        path: PATHS.dist,
    },
    plugins,
    target: isDevelopment ? 'web' : 'browserslist',
};
