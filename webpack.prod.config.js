const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
    mode: "production",
    entry: {
        main : path.resolve(__dirname, "./src/index.tsx"),
        sw: path.resolve(__dirname, "./src/sw.ts")     
    },
    output : {
        path : path.resolve(__dirname, './public'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'babel-loader'
                    },
                    {
                        loader: "ts-loader",
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|jpe?g|png|gif|svg|jpg|pdf|ico|webmanifest)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.ts(x?)$/,
                loader: "source-map-loader"
            },
            {
                test: /\.core.worker\.ts$/,
                use: { 
                    loader: "worker-loader",
                    options :{
                        filename: 'worker.js',
                    }
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({            
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: "Application Title",
            hash: false,
            filename : './index.html',
            template: './index.html',
            inject: true,
        }),
        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['**/*']
        }),
        new webpack.DefinePlugin({
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        alias : {
        }
    }
};