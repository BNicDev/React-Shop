const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
    },
    mode:'development',
    resolve:{
        extensions:['.js', '.jsx'],
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader' 
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                   {
                  loader: 'file-loader',
                    options: {
                    name: 'images/[hash]-[name].[ext]',
                         },
                   },
                   ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html' 
        }),
        new miniCssExtractPlugin({
            filename:'[name].css'
        }),
    ]
}
