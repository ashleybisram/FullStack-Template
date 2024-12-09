// This file will configure our Webpack.
const path= require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // tell Webpack where the entrypoint of our application is 
    entry: '.client/index.js', //this will create a dependency graph

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },

    plugins: [
    new HTMLWebpackPlugin({
        template: './client/index.html'
    })
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/, //we don't need to transpile our libraries
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ],

    }
}