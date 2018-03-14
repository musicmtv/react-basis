var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    entry: {
        webindex:"./src/js/index"
    },

    output: {
        filename:'[name].js',
        path:__dirname + '/build'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },




    plugins: [
        // ...
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/pages/index.html',
            chunks:["webindex"]
        })
    ],
    // externals:{
    //     'react':'React',
    //     'react-dom':'ReactDOM'
    // },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
    // list of additional plugins


    /* Advanced configuration (click to show) */
}