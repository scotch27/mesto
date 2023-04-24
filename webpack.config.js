const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    entry: "./src/pages/index.js",
    output: {
      filename: "main.js",
      path: path.join(__dirname, "dist")
    },
    devServer: {
      static: path.join(__dirname, "dist"), // путь, куда "смотрит" режим разработчика
      compress: true, // это ускорит загрузку в режиме разработки
      port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

      open: true, // сайт будет открываться сам при запуске npm run dev
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          use: "babel-loader",
        },
        {
          // регулярное выражение, которое ищет все файлы с такими расширениями
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
          type: "asset/resource",
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html", // путь к файлу index.html
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
    ],
  },
];
