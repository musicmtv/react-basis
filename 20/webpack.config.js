var HtmlWebpackPlugin = require('html-webpack-plugin');
var path=require("path");
var config= {
    entry: {
        index: "./src/js/index"

    },
    output:{
        filename: '[name].js',
        path: __dirname + '/build'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html',
            chunks:["index"]
        }),


    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'application/font-woff',
                },
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'application/font-woff',
                },
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'application/octet-stream',
                },
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'application/vnd.ms-fontobject',
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'image/svg+xml',
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    externals: {
       /* 'react': 'React',
        'react-dom':'ReactDOM'*/
    }
    ,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }


}

module.exports=config;