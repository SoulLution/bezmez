const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var os = require("os");
var hostname;
if(os.networkInterfaces().lo && os.networkInterfaces().lo.length && os.networkInterfaces().lo[0].address === '127.0.0.1')
  hostname = 'localhost'
else
  hostname = os.hostname()

var dotenv = require('dotenv').config({path: __dirname + '/.env'});

//hostname = os.networkInterfaces().ens160[0].address

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const config = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: 'localhost',
    port: 9001,
    // poll: true
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              prependData: `@import "@/style/style.scss";`
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.vue'
    ],
    alias: {
      '@': path.resolve(__dirname, 'src')
      // '@': resolve('src')
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({"process.env": dotenv.parsed})
  ]
};

module.exports = config;
