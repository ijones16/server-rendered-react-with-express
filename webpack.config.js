module.exports = {
  entry: './src/main.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  devServer: {
    inline:true,
    contentBase: './public',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}