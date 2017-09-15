const config = require('./config');

module.exports = {
  entry: {
    'cm': ['./src/app.js']
  },
  output: config.output,
  resolve: config.resolve,
  module: {
    rules: [
      config.babelLoader,
      config.generateSassLoader('cm'),
      config.fileLoader
    ]
  },
  devServer: config.devServer,
  plugins: config.plugins
};