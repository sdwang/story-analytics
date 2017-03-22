/*
webpack will analyze entry file for other dependencies and add them to the bundle.  Each file/module will be given a
unique id.  Only the entry module is executed at startup.*/

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    app: './components/App.js'
  },
  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true,
  },
  output: { path: __dirname + '/main', filename: 'bundle.js', publicPath: 'http://localhost:7700/dist'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        include: /\.json$/,
        loaders: ["json-loader"]
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.json', '.jsx', '.js']
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};

module.exports = config;
