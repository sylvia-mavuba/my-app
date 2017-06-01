var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function(env){

  var isProduction = env && env.production;
  var outputFilename = '[name].js';
  // var outputFilename = isProduction ? '[name].[chunkhash].js' : '[name].js';
  var outputDirectory = './public';

  var plugins = [
    new webpack.optimize.CommonsChunkPlugin({ name: 'app', name: 'libs' }),
    new ExtractTextPlugin('main.css'),
    // new ExtractTextPlugin(isProduction ? 'main.[chunkhash].css' : 'main.css'),
  ];


  return {
    entry: {
      libs: ['angular', 'moment', 'underscore', 'jquery', 'angular-ui-router', 'moment-timezone'],
      app: './src/js/app/app.js'
    },
    output: {
      filename: outputFilename,
      path: path.join(__dirname, outputDirectory)
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              { loader: 'css-loader' },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [ require('autoprefixer') ]
                }
              },
              { loader: 'sass-loader' },
            ]
          })
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: plugins
  }
}
