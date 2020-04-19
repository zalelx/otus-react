const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: ['node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: false,
          sourceMaps: true,
          minified: true,
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
        },
      },
    ],
  },
};
