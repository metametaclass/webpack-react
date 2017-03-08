const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


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
      { test: /\.css$/, 
        exclude: /node_modules/,
        //loader: "style-loader!css-loader"
        loader: ExtractTextPlugin.extract("css-loader")
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

  plugins: [new ExtractTextPlugin("styles.[hash].css"),
            new HtmlWebpackPlugin(
                   {title: "react test app",
                    inject: false,
                    template: require('html-webpack-template'),                
                    appMountIds: ["app", "root"], //div with ids for react app
                    minify: {collapseWhitespace: true, preserveLineBreaks: true}
                   }),
            
 ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  }

};
