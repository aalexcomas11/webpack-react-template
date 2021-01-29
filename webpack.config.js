const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const environment = process.env.NODE_ENV;
const environmentMapping = {
    production: 'production',
    development: 'development'
}


module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'some cool title'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    mode: environment ? environmentMapping[environment] : 'production',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}