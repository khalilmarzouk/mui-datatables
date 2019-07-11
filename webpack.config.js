const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./examples/customize-filter/index.js"
  },
  stats: "verbose",
  context: __dirname,
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
    hot: true,
    inline: true,
    host: "0.0.0.0",
    port: 5050
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development"),
      }
    })
  ]
};
