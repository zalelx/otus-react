module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@emotion/babel-preset-css-prop",
  ],
  env: {
    production: {
      plugins: [
        "emotion",
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
      ],
    },
    development: {
      plugins: [
        ["emotion", { sourceMap: true }],
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
      ],
    },
  },
};
