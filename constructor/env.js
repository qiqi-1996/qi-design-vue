import path from "path";

const PATH_ROOT = path.resolve(__dirname, "../");
const PATH_LIBRARY = path.resolve(PATH_ROOT, "library");
const PATH_DOCUMENT = path.resolve(PATH_ROOT, "document");
const PATH_DIST = path.resolve(PATH_ROOT, "dist");

const PATH_LIBRARY_COMPONENTS = path.resolve(PATH_LIBRARY, "components");
const PATH_DOCUMENT_PAGES = path.resolve(PATH_DOCUMENT, "pages");

const PATH_VSCODE = path.resolve(PATH_ROOT, ".vscode");

export default {
    PATH_ROOT,
    PATH_LIBRARY,
    PATH_DOCUMENT,
    PATH_DIST,
    
    PATH_LIBRARY_COMPONENTS,
    PATH_DOCUMENT_PAGES,

    PATH_VSCODE
}