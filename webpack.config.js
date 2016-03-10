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
                    loader: 'babel' // <-- changed line
                    //exclude: /node_modules/
                },
                { test:  /\.json$/, loader: 'json-loader' },
            ]
        }
    }
];