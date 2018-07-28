var HtmlWebpackPlugin = require('html-webpack-plugin');
var apiData = require('./apiMock.js');
module.exports = {
  devServer: {
    before: function(app) {
      app.get('/numbers', function(req, res) {
        res.json(apiData(req.query.page, req.query.perPage));
      });
    }
  },
  module: {
    rules: [
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader",]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html', filename: './index.html'}),
  ]
}
