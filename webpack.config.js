const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './index.js',
        hot: 'webpack/hot/dev-server.js',
        client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve("dist"),
        publicPath: "/",
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
        hot: true,
        
        client: {
            reconnect: true,
            overlay: {
            errors: true,
            warnings: false,    
        },
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}
