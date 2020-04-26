import fs from "fs";
import path from "path";
import {
    spawnSync
} from "child_process";

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

logger.process("清理目录");
fs.rmdirSync(env.PATH_DIST, {
    recursive: true
});
fs.mkdirSync(env.PATH_DIST);
logger.process(true);

logger.process("正在编译");
let NPM_BUILD = spawnSync("npm", ["run", "build"], {
    cwd: env.PATH_ROOT
});
checkSpawnResult(NPM_BUILD);

logger.process("拷贝 Gitlab CI 配置");
fs.copyFileSync(__dirname + "/vendors/.gitlab-ci.yml", path.resolve(env.PATH_DIST_DOCUMENT, ".gitlab-ci.yml"));
logger.process(true);

logger.process("初始化仓库");
let GIT_INIT = spawnSync("git", ["init"], {
    cwd: env.PATH_DIST_DOCUMENT
})
checkSpawnResult(GIT_INIT);

logger.process("追加文件");
let GIT_ADD = spawnSync("git", ["add", "-A"], {
    cwd: env.PATH_DIST_DOCUMENT
})
checkSpawnResult(GIT_ADD);

logger.process("提交文件");
let GIT_COMMIT = spawnSync("git", ["commit", "-m", "publish document"], {
    cwd: env.PATH_DIST_DOCUMENT
})
checkSpawnResult(GIT_COMMIT);

logger.process("推送仓库");
let GIT_PUSH = spawnSync("git", ["push", "-f", "git@github.com:qiqi-1996/qi-design-vue.git", "master:gh-pages"], {
    cwd: env.PATH_DIST_DOCUMENT
})
checkSpawnResult(GIT_PUSH);

