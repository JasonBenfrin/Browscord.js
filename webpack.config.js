const path = require('node:path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      'util': require.resolve('util/'),
      'zlib': require.resolve('browserify-zlib'),
      'stream': require.resolve('stream-browserify'),
      'buffer': require.resolve('buffer/'),
      'assert': require.resolve('assert-browserify')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: ['Discord']
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  mode: 'development'
};