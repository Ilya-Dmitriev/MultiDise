/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-undef */
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const variableConfic = require(`./webpack.${process.env.NODE_ENV}`);

module.exports = merge(commonConfig, variableConfic);
