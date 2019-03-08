const path = require('path');

console.log('estoy por configurar webpack !!!');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    publicPath: '/dst/',
    port: 80,
    historyApiFallback: true
  },
  module: {
     rules: [
       {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
       } 
     ]
  },
  output: {
    path: path.resolve(__dirname, 'dst'),
    filename: 'bundle.js'
  }
};
