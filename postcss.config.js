const isProd = process.env.NODE_ENV === 'production';
const plugins = [
    require('postcss-preset-env'),
    require('postcss-sort-media-queries'),
]
if (isProd) { plugins.push(require('cssnano')({ preset: 'default', }),) }

module.exports = {
    plugins
};