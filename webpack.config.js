const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    output: {
        filename: '[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vunki',
            template: 'template.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
      alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  }
} 