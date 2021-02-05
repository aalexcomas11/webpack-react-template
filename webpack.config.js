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
            template: './src/index.html'
        })
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
                {
                    test: /\.(t|j)sx?$/,
                    use: [
                        'babel-loader',
                        'ts-loader'
                    ]
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                   test: /\.(woff|woff2|eot|ttf|otf)$/i,
                   type: 'asset/resource',
                },
            ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            components: path.resolve(__dirname, '/src/components')
        }
    },
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