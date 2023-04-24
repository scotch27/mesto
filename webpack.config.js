const path = require("path");

module.exports = [
  {
    entry: "./src/pages/index.js",
    output: {
      filename: "main.js",
      path: path.join(__dirname, "dist"),
      clean: true,
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
      ],
    },
  },
];
