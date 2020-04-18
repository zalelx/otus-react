const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        /*exclude: /(node_modules)/,
        options: {
          compact: false,
          sourceMaps: true,
          minified: true,
          presets: ['@babel/preset-env','@babel/preset-typescript'],
        },*/
      },
    ]
  }
};
