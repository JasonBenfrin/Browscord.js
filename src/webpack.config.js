const path = require('node:path')
const webpack = require('webpack')

module.exports = {
  entry: './index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      'util': require.resolve('util/'),
      'url': require.resolve('url/'),
      'http': require.resolve('stream-http'),
      'https': require.resolve('https-browserify'),
      'zlib': require.resolve('browserify-zlib'),
      'stream': require.resolve('stream-browserify'),
      'buffer': require.resolve('buffer/'),
      'assert': require.resolve('assert-browserify')
    }
  },
  output: {
    filename: 'browscord.js',
    path: path.resolve(__dirname, '..', 'dist'),
    library: ['Discord']
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  mode: 'development'
};