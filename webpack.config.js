const path = require('path')
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/index.ico"
    })
  ],
  module: {
    rules: [
        {
        test: /\.css$/,
        use: [
            "style-loader", //2. Inject styles into DOM
            "css-loader", //1. Turns css into commonjs
        ]
        }
    ]
  }
}