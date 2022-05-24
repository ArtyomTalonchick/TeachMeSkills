const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => ({
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    mode: env.development ? "development" : "production",
    devtool: env.development ? "source-map" : false,
    target: ['web', 'es5'],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CleanWebpackPlugin(),
        new Dotenv(),
    ]
});