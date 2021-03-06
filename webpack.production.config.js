/**
 * Created by jane on 3/5/16.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('argv-set-env')()
module.exports = {

    entry:  __dirname + '/src/app/main.js',

    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css', 'less')
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + "/src/app/index.tmpl.html"
        }),
        new webpack.BannerPlugin("Awesome Janeluck"),
        new ExtractTextPlugin("[name]-[hash].css")
    ]
};



