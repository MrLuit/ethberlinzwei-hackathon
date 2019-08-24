import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, EnvironmentPlugin } from 'webpack';

const configuration: Configuration = {
  entry: resolve(__dirname, '../src/index.tsx'),
  output: {
    path: resolve(__dirname, '../dist/'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html')
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ]
};

export default configuration;
