const path = require('path');
const webpack = require('webpack');

const PORT = process.env.PORT || 8000;

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: [
    'react-hot-loader/patch',
    './provider.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: { // is using virtual directory space, do not confuse with real public/bundle.js compiled in production.
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: PORT,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './public'),
  },
  resolve: {
    alias: {
      'jg-src': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [ require('autoprefixer') ]
            }
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {'modules': false}],
              ['es2015', {'modules': false}],
              'stage-0',
              'react'
            ],
            plugins: ['transform-runtime'],
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
