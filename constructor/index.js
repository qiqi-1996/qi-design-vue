import fs from "fs";
import path from "path";

import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import merge from "webpack-merge";
import getPort from "get-port";

import env from "./env.js";
import auto from "./auto.js";
import config_base from "./webpack.base.conf.js";
import config_dev from "./webpack.dev.conf";
import config_prod from "./webpack.prod.conf";

async function dev(userConfig) {
    process.env.NODE_ENV = "development";

    auto.runForComponents();
    auto.runForPages();
    auto.watch();

    const config = merge(config_base, config_dev, userConfig);
    const compiler = webpack(config);
    const devServerConfig = config.devServer;
    if (!devServerConfig.port) {
        let port = await getPort({
            port: [80, 81, 8080, 8081, 7777]
        });
        devServerConfig.port = port
    }
    const devServer = new WebpackDevServer(compiler, devServerConfig);
    devServer.listen(devServerConfig.port);
}

async function build(userConfig, options) {
    process.env.NODE_ENV = "production";

    auto.runForComponents();
    auto.runForPages();

    const config = merge(config_base, config_prod, userConfig);
    const compiler = webpack(config);

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                console.error(err.stack || err);
                if (err.details) {
                    console.error(err.details);
                }
                return;
            }
    
            let statsJson = stats.toJson();
    
            if (stats.hasErrors()) {
                console.error(statsJson.errors);
            }
    
            if (stats.hasWarnings()) {
                console.warn(statsJson.warnings);
            }
    
            fs.writeFileSync(path.resolve(env.PATH_ROOT, `stats_${options.scope}.json`), JSON.stringify(statsJson));

            resolve();
    
            // console.log(stats.toString({
            //     colors: true
            // }));
        })
    })
}

export default {
    dev,
    build
}