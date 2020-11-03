const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;
const jsLoaders = () => {
    const loaders = [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  
    return loaders
  }

module.exports = {
  entry: ['@babel/polyfill', './index.js'],
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      // new TerserWebpackPlugin()
    ],
  },

  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],

  module: {
    rules: [
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         hmr: isDev,
      //         reloadAll: true
      //       }
      //     },
      //     'css-loader',
      //     'sass-loader'
      //   ],
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true
            }
          },
          // 'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        // include: path.resolve(__dirname, 'src/img'),
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img',
          }
        }],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'font'
          }
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      }
    ]
  }
};