const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const environment = process.env.NODE_ENV;
const environmentMapping = {
  production: 'production',
  development: 'development',
};

// const isProd = environmentMapping[environment] === 'production';
const isDev = environmentMapping[environment] === 'development';

module.exports = {
  entry: './src/index.js',
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'css'],
      exclude: ['node_modules', 'dist', 'src/**/*.css'],
      emitError: isDev,
      emitWarning: isDev,
      failOnError: isDev,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      api: path.resolve(__dirname, 'src', 'api'),
      components: path.resolve(__dirname, 'src', 'components'),
    },
  },
  devServer: {
    contentBase: './dist',
    hot: isDev,
  },
  mode: environment ? environmentMapping[environment] : 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
