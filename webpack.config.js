const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ?
    "production" :
    "development",

  output: {
    //clean: true,
    //filename: './[contenthash].js',
    filename: './[name].js',
  },

  module: {
    rules: [
      {
        test: /\.s?css/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // {
      //   test: /\.js/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
      {
        test: /\.html/,
        loader: 'html-loader',

      },


    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      //filename: './[contenthash].css',
      filename: './[name].css',

    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'assets', to: '' }
    //   ],
    // }),
  ],

  devtool: "source-map",

  devServer: {
    static: "./dist",
    hot: true,
    port: 666,
    open: true,
  },
};