module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      },
      
    ],

    rules: [
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
        filename: 'public/[name].js'
  },


};
