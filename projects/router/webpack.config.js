const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    mode: "production",
    
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        { 
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: "babel-loader",
        }
      ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./app/pages", to: "./pages" },
            ]
        }),
    ]
}