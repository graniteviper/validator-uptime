// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // Switch to 'production' for minified builds
  entry: './src/popup.tsx',
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", 'sass-loader'],
      },
    ],
  },
  devtool: 'cheap-source-map',
};