const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'] //'*' for explicit extensions?
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
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
        test: /\.jsx?$/,
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

  plugins: [new CleanWebpackPlugin('dist', {dry: false, verbose: true}),
            new ExtractTextPlugin("styles.[hash].css"),
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
