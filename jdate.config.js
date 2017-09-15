const config = require('./config');

module.exports = {
  entry: {
    'jdate': ['./src/app.js']
  },
  output: config.output,
  resolve: config.resolve,
  module: {
    rules: [
      config.babelLoader,
      config.generateSassLoader('jdate'),
      config.fileLoader
    ]
  },
  devServer: config.devServer,
  plugins: config.plugins
};