module.exports = {
  module: {
    rules: [{
      // js jsx等编译
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}