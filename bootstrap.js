import fs from "fs";
import path from "path";

import constructor from "./constructor";
import env from "./constructor/env.js";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import packagejson from "./package.json";
import JSZIP from "jszip";

const START_MODE = process.argv[2];

switch (START_MODE) {
    case "development":
        constructor.dev({
            entry: {
                "document": path.resolve(env.PATH_DOCUMENT, "index.js"),
            },
            plugins: [
                new HtmlWebpackPlugin({
                    filename: "index.html",
                    inject: "body",
                    chunks: "all",
                    template: path.resolve(env.PATH_DOCUMENT, "index.html")
                })
            ]
        });
        break;
    case "production":
        (async () => {
            console.log("> 正在构建库");

            await constructor.build({
                entry: {
                    "library": path.resolve(env.PATH_LIBRARY, "index.js"),
                },
                output: {
                    path: path.resolve(env.PATH_DIST, "library"),
                    library: {
                        root: "QiDesignVue",
                        amd: "QiDesignVue",
                        commonjs: "QiDesignVue"
                    },
                    libraryTarget: "umd",
                    libraryExport: 'default'
                },
                plugins: [
                    new MiniCssExtractPlugin({
                        filename: "[name].css",
                        chunkFilename: "[name].css"
                    })
                ]
            }, { scope: "library" });

            console.log("> 正在构建文档");

            await constructor.build({
                entry: {
                    // "library": path.resolve(env.PATH_LIBRARY, "index.js"),
                    "document": path.resolve(env.PATH_DOCUMENT, "index.js"),
                },
                output: {
                    filename: "[name].[hash].js",
                    path: path.resolve(env.PATH_DIST, "document"),
                    publicPath: "./",
                },
                plugins: [
                    new HtmlWebpackPlugin({
                        filename: "index.html",
                        inject: "body",
                        chunks: "all",
                        template: path.resolve(env.PATH_DOCUMENT, "index.prod.html")
                    }),
                    new MiniCssExtractPlugin({
                        filename: "[name].[hash].css",
                        chunkFilename: "[name].[hash].css"
                    })
                ]
            }, { scope: "document" });

            console.log("> 调整输出内容");

            fs.renameSync(env.PATH_DIST + "/library/library.css", env.PATH_DIST + "/library/style.css");
            fs.copyFileSync(env.PATH_LIBRARY + "/core/standard.less", env.PATH_DIST + "/library/standard.less");

            console.log("> 追加资源");

            fs.copyFileSync(__dirname + "/design/Qi Design Standard.sketch", __dirname + "/dist/document/qi-design-standard.sketch")
            fs.copyFileSync(__dirname + "/README.md", __dirname + "/dist/library/README.md");
            fs.copyFileSync(__dirname + "/README.md", __dirname + "/dist/document/README.md");

            console.log("> 正在打包编译结果");

            let zip = new JSZIP();
            zip.file("qi-design-vue.js", fs.readFileSync(env.PATH_DIST + "/library/library.js"));
            zip.file("qi-design-vue.css", fs.readFileSync(env.PATH_DIST + "/library/style.css"));
            zip.file("qi-design-vue.less", fs.readFileSync(env.PATH_DIST + "/library/standard.less"));
            let assets = zip.folder("assets");
            let files = fs.readdirSync(env.PATH_DIST + "/library/assets");
            files.forEach(filename => {
                assets.file(filename, fs.readFileSync(env.PATH_DIST + `/library/assets/${filename}`));
            });
            await zip.generateNodeStream({ type: "nodebuffer" })
                .pipe(fs.createWriteStream(env.PATH_DIST + `/document/qi-design-vue@${packagejson.version}.zip`));

            console.log("> 构建完毕");
        })()
        break;
}