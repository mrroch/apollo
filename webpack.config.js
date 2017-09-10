const {resolve} = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: "./src/js/app.js",
    output: {
        publicPath: "/dist/",
        path: resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            },
            
            {
                test: /\.s[ca]ss$/,
//                use: [
//                    { loader: "style-loader" },
//                    { loader: "css-loader" },
//                    { loader: "sass-loader" }
//                ]
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            },
            
//            {
//                test: /\.(png|jpg|gif|svg)$/,
//                use: {
//                    loader: 'file-loader',
//                }
//    }

            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: "[name].[ext]"
                    }
                }
            }
    ]

},
    
    plugins: [
        new ExtractTextWebpackPlugin("main.css"),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
    
};