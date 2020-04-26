import BodyParser from "body-parser";
import Logs from "./logs.js";
import Version from "./version.js";
import CodeSnippets from "./code-snippets.js";
import PublishDocument from "./publish-document.js";
import PublishLibrary from "./publish-library.js";

function applyHttpMethods(options) {
    let { app, api, name } = options;
    name = "/devapi/" + name;
    api.get && app.get(name, api.get);
    api.post && app.post(name, api.post);
    api.put && app.put(name, api.put);
    api.delete && app.delete(name, api.delete);
}

export default function (app, server, compiler) {
    app.use(BodyParser.json());
    applyHttpMethods({ name: "logs", api: Logs, app});
    applyHttpMethods({ name: "version", api: Version, app});
    applyHttpMethods({ name: "code-snippets", api: CodeSnippets, app});
    applyHttpMethods({ name: "publish-document", api: PublishDocument, app});
    applyHttpMethods({ name: "publish-library", api: PublishLibrary, app});
}