var webpack = require('webpack');
var path = require('path')

module.exports = [
    {
        name: 'server',
        entry: "./src/server.js",
        output: {
            path: __dirname,
            filename: "server.js"
        },
        target: 'node',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                { test:  /\.json$/, loader: 'json-loader' },
            ]
        }
    },
    {
        name: 'client',
        entry: "./src/client.js",
        output: {
            path: __dirname,
            filename: "./public/js/app.js"
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    loaders: ["style-loader", "css-loader", "scss-loader", "sass-loader"]
                }
            ]
        }
    }
];
