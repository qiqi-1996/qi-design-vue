import fs from "fs";
import path from "path";

import utils from "./vendors/utils.js";
import env from "../env.js";

export default {
    get(req, res) {
        let json = JSON.parse(fs.readFileSync(path.resolve(env.PATH_ROOT, "package.json")).toString());
        res.json(utils.success({ version: json.version }));
    }
}