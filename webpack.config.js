const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    output: {
        filename: '[hash].js'
    },
    module: {
      rules: [
        {test: /\.html$/, use: 'html-loader'}
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vunki',
            template: 'template.html'
        }),
        new webpack.ProvidePlugin({
          Vue: ['vue/dist/vue.esm.js', 'default'],
          PouchDB: ['pouchdb', 'default'],
          Database: ['db', 'default']
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
      alias: {
        db: path.resolve(__dirname, './src/services/pouch/config.js')
    }
  }
}
