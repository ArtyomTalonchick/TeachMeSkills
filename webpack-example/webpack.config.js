const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => ({
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    mode: env.development ? "development" : "production",
    devtool: env.development ? "source-map" : false,
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },
            {
              test: /\.(js)$/,
              exclude: /node_modules/,
              use: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CleanWebpackPlugin(),
    ]
});