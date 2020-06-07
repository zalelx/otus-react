const custom = require("../webpack.dev");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
  ],

  webpackFinal: (config) => {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    config.module.rules.push({
      test: /\.stories\.tsx$/,
      loaders: [
        {
          loader: require.resolve("@storybook/source-loader"),
          options: { parser: "typescript" },
        },
      ],
      enforce: "pre",
    });
    return {
      ...config,
      resolve: custom.resolve,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    };
  },
};
