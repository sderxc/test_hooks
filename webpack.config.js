const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '*/*',
        to: '[name].[ext]',
        test: /([^/]+)\/(.+)\.jpg$/,
        ignore: [ '*.js' ]
      }
    ])
  ]
};
