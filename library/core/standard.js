const COLOR_BLACK = "#000000";
const COLOR_WHITE = "#FFFFFF";

const COLOR_POE = "#333333";
const COLOR_STARRYNIGHT = "#2953A6";

const COLOR_DICT = {
    "poe": COLOR_POE,
    "starrynight": COLOR_STARRYNIGHT
}

function hex(value = 255) {
    let result = value.toString(16);
    if (result.length < 2) {
        return "0" + result;
    } else {
        return result;
    }
}

function fade(colorObject, alpha) {
    let r, g, b, a = { colorObject };
    if (alpha < 1) {
        a = Math.floor(alpha * 255);
    } else {
        a = alpha;
    }
    return {
        r, g, b, 
        a: a || 255,
        rgba: `rgba(${r},${g},${b},${a || 255})`,
        hex: `#${hex(r)}${hex(g)}${hex(b)}${hex(a || 255)}`
    }
}

function resolveColor(colorString) {
    let r, g, b, a;
    if (Object.keys(COLOR_DICT).indexOf(colorString) != -1) {
        return resolveColor(COLOR_DICT[colorString]);
    } else if (colorString.trim().indexOf("rgb") == 0) {
        let match = colorString.match(/rgb(a?)\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*),?(\s*\d+\s*)?\)/)
        r = match[2];
        g = match[3];
        b = match[4];
        if (match[5]) {
            a = match[5];
        }
    } else if (colorString.trim().indexOf("#") == 0) {
        let match;
        if (colorString.trim().length < 5) {
            match = colorString.match(/#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})?/);
            r = parseInt(match[1] + match[1], 16);
            g = parseInt(match[2] + match[2], 16);
            b = parseInt(match[3] + match[3], 16);
            if (match[4]) {
                a = parseInt(match[4] + match[4], 16);
            }
        } else {
            match = colorString.match(/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?/);
            r = parseInt(match[1], 16);
            g = parseInt(match[2], 16);
            b = parseInt(match[3], 16);
            if (match[4]) {
                a = parseInt(match[4], 16);
            }
        }
    }
    return {
        r, g, b, 
        a: a || 255,
        rgba: `rgba(${r},${g},${b},${a || 255})`,
        hex: `#${hex(r)}${hex(g)}${hex(b)}${hex(a || 255)}`
    }
}

export default {
    grid: 8,
    top: 9999,

    color: {
        list: Object.keys(COLOR_DICT),
        main: resolveColor(COLOR_POE),

        black: resolveColor(COLOR_BLACK),
        white: resolveColor(COLOR_WHITE),

        light: {
            foreground: resolveColor(COLOR_POE),
            secondary_text: fade(resolveColor(COLOR_POE), 0.5),
            decorate: fade(resolveColor(COLOR_POE), 0.2),
            secondary_background: fade(resolveColor(COLOR_POE), 0.5),
            background: fade(resolveColor(COLOR_WHITE), 0.5),
        },
        dark: {
            foreground: resolveColor(COLOR_WHITE),
            secondary_text: fade(resolveColor(COLOR_WHITE), 0.5),
            decorate: fade(resolveColor(COLOR_WHITE), 0.2),
            secondary_background: fade(resolveColor(COLOR_WHITE), 0.5),
            background: fade(resolveColor(COLOR_BLACK), 0.5),
        }
    }
}

export {
    resolveColor,
    fade
}