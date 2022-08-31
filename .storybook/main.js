const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]--[hash:base64:5]',
          },
        },
        sassLoaderOptions: {
          additionalData: '@import "variables"; @import "mixins";',
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../src/sass')],
          },
        },
      },
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
}