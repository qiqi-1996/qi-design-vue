import fs from "fs";
import path from "path";
import {
    spawnSync
} from "child_process";

import jsonFormat from "json-format";

import env from "./env.js";
import logger from "./logger.js";

function checkSpawnResult(result) {
    if (result.status) {
        logger.process(false);
        console.error(result.stderr.toString());
        process.exit();
    } else {
        logger.process(true);
    }
    
}

var version = process.argv[2];

console.log(version);

logger.process("清理目录");
fs.rmdirSync(env.PATH_DIST, {
    recursive: true
});
fs.mkdirSync(env.PATH_DIST);
logger.process(true);

logger.process("修改 package.json 配置");
let json1Path = path.resolve(env.PATH_ROOT, "package.json");
let json2Path = path.resolve(env.PATH_ROOT, "script", "vendors", "package.json");
let json1 = JSON.parse(fs.readFileSync(json1Path).toString());
let json2 = JSON.parse(fs.readFileSync(json2Path).toString());
json1.version = version;
json2.version = version;
let json1String = jsonFormat(json1, { type: 'space', size: 2 });
let json2String = jsonFormat(json2, { type: 'space', size: 2 });
fs.writeFileSync(json1Path, json1String);
fs.writeFileSync(json2Path, json2String);
logger.process(true);

logger.process("正在编译");
let NPM_BUILD = spawnSync("npm", ["run", "build"], {
    cwd: env.PATH_ROOT
});
checkSpawnResult(NPM_BUILD);

logger.process("拷贝 package.json 配置");
fs.copyFileSync(__dirname + "/vendors/package.json", path.resolve(env.PATH_DIST_LIBRARY, "package.json"));
logger.process(true);


logger.process("推送版本");
let NPM_PUBLISH = spawnSync("npm", ["publish", "--access", "public"], {
    cwd: env.PATH_DIST_LIBRARY
})
checkSpawnResult(NPM_PUBLISH);

