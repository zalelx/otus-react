const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: false,
          sourceMaps: true,
          minified: true,
          presets: ['@babel/preset-env'],
        },
      },
    ]
  }
};
