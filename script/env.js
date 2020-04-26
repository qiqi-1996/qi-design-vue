import path from "path";

const PATH_ROOT = path.resolve(__dirname, "../");
const PATH_LIBRARY = path.resolve(PATH_ROOT, "library");
const PATH_DOCUMENT = path.resolve(PATH_ROOT, "document");
const PATH_DIST = path.resolve(PATH_ROOT, "dist");
const PATH_DIST_DOCUMENT = path.resolve(PATH_ROOT, "dist", "document");
const PATH_DIST_LIBRARY = path.resolve(PATH_ROOT, "dist", "library");

export default {
    PATH_ROOT,
    PATH_LIBRARY,
    PATH_DOCUMENT,
    PATH_DIST,
    PATH_DIST_DOCUMENT,
    PATH_DIST_LIBRARY
}