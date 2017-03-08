const path = require('path')

module.exports = {
  entry: './src/app.js',
  devtool: 'source-map',
  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ ['es2015', { "modules": false }], 'react' ] }
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "eslint-loader",
            options: {
             failOnWarning: false,
             failOnError: true
            }   
          }
        ]        
      },
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  }

};
