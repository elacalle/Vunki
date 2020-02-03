const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  output: {
    filename: "[hash].js"
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.html$/, use: "html-loader" }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Vunki",
      template: "template.html"
    }),
    new webpack.ProvidePlugin({
      Vue: ["vue/dist/vue.esm.js", "default"],
      Dexie: ["dexie", "default"],
      Database: ["db", "default"]
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      db: path.resolve(__dirname, "./src/services/database/config.js")
    }
  }
};
