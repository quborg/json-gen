const path = require('path');
const webpack = require('webpack');

const PORT = process.env.PORT || 8000;

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [ require('autoprefixer') ]
            }
          },
          'sass-loader',
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
              'react',
            ],
            plugins: [
              'transform-runtime',
              'transform-class-properties',
              'transform-object-rest-spread',
            ],
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      PropTypes: 'prop-types',
      Helpers: 'jg-src/helpers',
      Fixtures: 'jg-src/assets/fixtures',
    }),
  ]
};
