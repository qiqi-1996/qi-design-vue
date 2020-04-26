import utils from "./vendors/utils.js";

export default {
    get(req, res) {
        res.json(utils.success({ logs: utils.readLog() }));
    }
}

