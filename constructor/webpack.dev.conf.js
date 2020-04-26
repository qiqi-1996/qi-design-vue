import webpack from "webpack";
import env from "./env.js";
import devapi from "./devapi";

export default {
    mode: "development",
    watch: true,
    devtool: "inline-source-map",
    devServer: {
        quiet: true,
        hot: true,
        open: true,
        publicPath: "/",
        contentBase: env.PATH_DIST,
        compress: false,
        historyApiFallback: true,
        disableHostCheck: true,
        before: devapi
    },
    optimization: {
        noEmitOnErrors: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "__DEVELOPMENT__": true
        })
    ]
}