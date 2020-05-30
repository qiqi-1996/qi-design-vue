export default function () {
    if (window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return true;
        } else {
            return false;
        }
    }
}