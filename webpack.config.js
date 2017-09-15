const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
};

const resolve = {
  alias: {
    styles: path.resolve(__dirname, 'src/styles')
  }
};

const babelLoader = {
  test: /\.js$/,
  include: path.resolve(__dirname, 'src'),
  use: [{
    loader: 'babel-loader',
    options: {
      presets: [
        // modules: false enables Tree Shaking to remove unused exports
        'env',
        'react',
        'stage-0'
      ]
    }
  }]
};

const plugins = [
  new HtmlWebpackPlugin({
    template: "index.html"
  })
]

const fileLoader = {
  test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: 'images/[hash:8].[ext]'
      }
    }
  ]
}

const devServer = {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
}

const generateSassLoader = site => {
  const dataString = "@import './src/styles/site-specific/"+site+"/global.scss';"
  return {
    test: /\.scss$/,
    loader: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: dataString,
          includePaths: [
            path.resolve(__dirname, './src')
          ]
        }
      }
    ]
  }
}

module.exports = [
  {
    entry: {
      'app': ['./src/app.js']
    },
    output: output,
    resolve: resolve,
    module: {
      rules: [
        babelLoader,
        generateSassLoader('jdate'),
        fileLoader
      ]
    },
    devServer: devServer,
    plugins: plugins
  },
  {
    entry: {
      'cm': ['./src/app.js']
    },
    output: output,
    resolve: resolve,
    module: {
      rules: [
        babelLoader,
        generateSassLoader('cm'),
        fileLoader
      ]
    },
    devServer: devServer,
    plugins: plugins
  }
];