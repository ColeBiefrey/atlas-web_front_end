const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
    open: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
