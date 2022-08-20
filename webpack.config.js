const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const filename = ext => isDev ? `[name]${ext}` : `[name].[hash]${ext}`;

const PATHS = {
    src: path.resolve(__dirname, './src'),
    dist: path.resolve(__dirname, './dist'),
    assets: 'assets',
};

const plugins = [
    new HTMLWebpackPlugin({ template: `${PATHS.src}/index.html`, }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            // { from: `${PATHS.assets}/img`, to: `${PATHS.assets}/img` },
            { from: `${PATHS.assets}/fonts`, to: `${PATHS.assets}/fonts` },
        ]
    }),
    new MiniCssExtractPlugin({ filename: filename('.css') }),
];

if (isDev) { plugins.push(new webpack.SourceMapDevToolPlugin({ filename: '[file].map' })); };

module.exports = {
    mode: process.env.NODE_ENV,
    target: isDev ? 'web' : 'browserslist',
    context: PATHS.src,
    entry: {
        progect: './index.js',
    },
    output: {
        filename: filename('.js'),
        path: PATHS.dist,
    },
    plugins,
    devtool: isDev ? 'eval-cheap-module-source-map' : false,
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    devServer: {
        host: '26.177.118.225',
        port: 8081,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules:
            [
                {
                    test: /\.m?jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    use:
                        [
                            {
                                loader: 'babel-loader',
                                options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
                            },
                        ],
                },
                {
                    test: /\.(s[ac]|c)ss$/i,
                    dependency: { not: ['url'] },
                    use:
                        [
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
                                        includePaths: [path.resolve(__dirname, "src/sass")],
                                    }
                                }
                            },
                        ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    generator: { filename: `${PATHS.assets}/img/${filename('[ext]')}`, },
                },
            ]
    }
};