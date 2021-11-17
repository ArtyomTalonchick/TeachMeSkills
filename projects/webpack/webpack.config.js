const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    mode: "development",


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
    ]

}
