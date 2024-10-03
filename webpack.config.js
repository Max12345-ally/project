const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HTMLWebpackPlugin(),
    ]

}