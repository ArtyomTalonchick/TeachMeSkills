const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    target: ['web', 'es5'],

    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(sass|scss)$/, 
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            { 
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "My app",
            template: "./app/index.html"
        }),
        new Dotenv(),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
        }),
        new CopyPlugin({
            patterns: [
                { from: "./app/assets", to: "./assets" },
            ],
        }),
        new CleanWebpackPlugin(),
    ]

}
