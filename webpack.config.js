var path = require('path');
const publicPath =  path.resolve(__dirname, 'dist');
const buildPath =  path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  entry: buildPath + '/index.js',
  target: 'node',
  resolve: {
      extensions: ['.js'],
  },
  output: {
    path: publicPath,
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
        include: [
            path.resolve(__dirname, "src"),
        ],
      }]
  },
}
