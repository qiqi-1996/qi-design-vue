import common from "./common.i18n.json";

let result = {};

function parse(json, scope) {
    if (!json || !scope) {
        return;
    }
    for (let lang in json) {
        if (!result[lang]) {
            result[lang] = {};
        }
        result[lang][scope] = json[lang];
    }
}

parse(common, "common");

export default result;