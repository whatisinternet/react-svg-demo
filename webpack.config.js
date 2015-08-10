var webpack = require('webpack');

module.exports = {
  entry: {
    full: './src/index.coffee'
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: "[name].entry.js"
  },

  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.sass$/, loader: "style-loader!css-loader!sass?indentedSyntax" }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".coffee", ".sass"]
  },

  plugins: [
    new webpack.ProvidePlugin({
      "React": "react/addons"
    })
  ],

  devServer: {
    port: 8080
  }
}
