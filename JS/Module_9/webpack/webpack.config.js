const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  // entry: './src/index.js',
  //   entry: "./index.js", // with context
  entry: {
    main: ["@babel/polyfill", "./index.js"] // with polyfill
  },
  output: {
    // filename: 'bundle.js',
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },

  resolve: {
    extensions: [".js", ".css", ".jpg"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },

  plugins: [
    new HTMLWebpackPlugin({
      // template: './src/index.html'
      template: "./index.html" // with context
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],

  devServer: {
    port: 8080
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  }
};
