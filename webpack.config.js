const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const JsonServer = require('json-server')

module.exports = {
    context: __dirname,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            'isomorphic-fetch',
            './src/index.js'
        ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(eot|svg|png|ttf|woff|woff2)$/,
          use: 'url-loader?limit=100000&name=images/[name].[ext]'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        hash: false,
        filename: 'index.html',
        minify: {
          collapseWhitespace: false
        }
      })
    ],
    devServer: {
      historyApiFallback: {
        disableDotRule: true
      },
      setup: (app) => {
        const router = JsonServer.router('db.json', { foreignKeySuffix: 'Code'})
        router.db._.id = "code"
        app.use('/api', router)
      }
    }
  }
