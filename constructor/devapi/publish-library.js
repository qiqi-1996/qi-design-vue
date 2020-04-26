import fs from "fs";
import path from "path";
import env from "../env.js";
import utils from "./vendors/utils.js";

import {
    spawn
} from "child_process";


const SCRIPT_NAME = "publish-library.js";
const SCRIPT_PATH = path.resolve(env.PATH_ROOT, "script", SCRIPT_NAME);

var state = "";

export default {
    get(req, res) {
        res.json(utils.success({ state }));
    },
    post(req, res) {
        if (state === "working") {
            return;
        }
        let { version } = req.body;

        state = "working";

        let job = spawn("node", ["-r", "esm", SCRIPT_PATH, version], {
            cwd: path.dirname(SCRIPT_PATH)
        });

        job.stdout.on("data", (data) => {
            utils.writeLog({
                type: "message",
                message: data.toString()
            });
        })

        job.stderr.on("data", (data) => {
            utils.writeLog({
                type: "error",
                message: data.toString()
            });
        })

        job.on("error", () => {
            state = "error";
        });

        job.on("close", () => {
            state = "done";
            setTimeout(() => {
                state = "";
            }, 5000);
        });

        res.send();
    }
}

