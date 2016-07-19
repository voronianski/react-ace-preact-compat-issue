'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',

    entry: {
        app: './src/app'
    },

    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', 'json'],

        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
};