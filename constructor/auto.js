import fs from "fs";
import path from "path";
import env from "./env.js";

function watch() {
    fs.watch(env.PATH_LIBRARY_COMPONENTS, { recursive: true }, (evt, filename) => {
        if (filename === "index.js") {
            return;
        }
        runForComponents();
    });
    fs.watch(env.PATH_DOCUMENT_PAGES, { recursive: true }, (evt, filename) => {
        if (filename.indexOf("routes.js") != -1) {
            return;
        }
        runForPages();
    });
}

function runForComponents() {
    let components = fs.readdirSync(env.PATH_LIBRARY_COMPONENTS);
    let imports = [], exports = [];
    
    components.forEach((item, index) => {
        if (item === "index.js") {
            return;
        }
        imports.push(`import Q${item[0].toUpperCase() + item.slice(1, item.length)} from "./${item}/index.vue";`);
        exports.push(`    Q${item[0].toUpperCase() + item.slice(1, item.length)},`);
    });
    let result = "";
    result += imports.join("\n");
    result += `\n\n`
    result += `export default {\n`;
    result += exports.join("\n");
    result += "\n}";

    fs.writeFileSync(path.resolve(env.PATH_LIBRARY_COMPONENTS, "index.js"), result);
}

function runForPages(pagepath = env.PATH_DOCUMENT_PAGES) {
    let pages = fs.readdirSync(pagepath);
    let routes = [];
    
    pages.forEach((item, index) => {
        if (item === "routes.js") {
            return;
        }
        let route = "";
        route += `    {\n`
        route += `        name: "${item}",\n`;
        if (pagepath === env.PATH_DOCUMENT_PAGES) {
            route += `        path: "/${item}",\n`;
        } else {
            route += `        path: "${item}",\n`;
        }
        route += `        component: ()=>import(/* webpackChunkName: "${item}" */"./${item}/index.vue"),\n`;
        if (fs.existsSync(path.resolve(pagepath, item, "children"))) {
            route += `        children: require(/* webpackChunkName: "${item}" */"./${item}/children/routes.js").default,\n`
            runForPages(path.resolve(pagepath, item, "children"));
        }
        route += `    },`;
        routes.push(route);
    });

    if (fs.existsSync(path.resolve(pagepath, "404", "index.vue"))) {
        let route = "";
        route += `    {\n`
        route += `        name: "404",\n`;
        route += `        path: "*",\n`;
        route += `        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),\n`;
        route += `    },`;
        routes.push(route);
    }

    let result = "";
    result += `export default [\n`;
    result += routes.join("\n");
    result += "\n]";

    fs.writeFileSync(path.resolve(pagepath, "routes.js"), result);
}

export default {
    watch,
    runForComponents,
    runForPages
}