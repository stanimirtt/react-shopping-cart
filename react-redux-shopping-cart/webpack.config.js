const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  SRC: path.join(__dirname, 'src')
};

const webpackConfig = {
  entry: ['./src/index.jsx'],
  plugins: [new ExtractTextPlugin('style.css')],
  devtool: 'source-map',
  node: {
    fs: 'empty'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ],
        include: [PATHS.SRC],
        enforce: 'pre'
      },

      {
        test: /\.jsx?$/,

        include: [path.resolve('src')],
        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(woff|eot|ttf|woff2)$/,
        use: {
          loader: 'url-loader'
        }
      },

      {
        test: /\.(jpg|gif|png|svg)$/,
        use: {
          loader: 'file-loader?name=[name].[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

module.exports = webpackConfig;
