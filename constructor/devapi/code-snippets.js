import fs from "fs";
import path from "path";
import env from "../env.js";
import utils from "./vendors/utils.js";

const filepath = path.resolve(env.PATH_VSCODE, "qui-vue.code-snippets");

export default {
    get(req, res) {
        if (fs.existsSync(filepath)) {
            let vscode = fs.readFileSync(filepath).toString();
            let current = fs.readFileSync(__dirname + "/vendors/qui-vue.code-snippets").toString();
            if (vscode != current) {
                res.json(utils.success({ state: "update" }));
            } else {
                res.json(utils.success({ state: true }));
            }
        } else {
            res.json(utils.success({ state: false }));
        }
    },
    put(req, res) {
        try {
            fs.copyFileSync(__dirname + "/vendors/qui-vue.code-snippets", filepath)
        } catch (e) {
            res.json(utils.failed(e));
            return;
        }
        res.json(utils.success());
    },
    delete(req, res) {
        try {
            fs.unlinkSync(filepath)
        } catch (e) {
            res.json(utils.failed(e));
            return;
        }
        res.json(utils.success());
    }
}

