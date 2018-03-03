const path = require('path');

module.exports = {
  // devtool: 'eval-source-map',
  mode: 'development',
  entry: path.join(__dirname, 'src' , 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ]
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'],
            plugins: []
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'raw-loader',
        }
      }
    ]
  },
}
