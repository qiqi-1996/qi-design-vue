// Come From https://github.com/ElemeFE/element/blob/dev/src/utils/dom.js

import Vue from "vue";

const isServer = Vue.prototype.$isServer;
const ieVersion = Number(document.documentMode);
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

const camelCase = function (name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

const getStyle = ieVersion < 9 ? function (element, styleName) {
    if (isServer) return;
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'styleFloat';
    }
    try {
        switch (styleName) {
            case 'opacity':
                try {
                    return element.filters.item('alpha').opacity / 100;
                } catch (e) {
                    return 1.0;
                }
                default:
                    return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
        }
    } catch (e) {
        return element.style[styleName];
    }
} : function (element, styleName) {
    if (isServer) return;
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        var computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
};


const isInContainer = (el, container) => {
    if (!el || !container) return false;

    const elRect = el.getBoundingClientRect();
    let containerRect;

    if ([window, document, document.documentElement, null, undefined].includes(container)) {
        containerRect = {
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
            left: 0
        };
    } else {
        containerRect = container.getBoundingClientRect();
    }

    return elRect.top < containerRect.bottom &&
        elRect.bottom > containerRect.top &&
        elRect.right > containerRect.left &&
        elRect.left < containerRect.right;
};

const isScroll = (el, vertical) => {
    // const determinedDirection = vertical !== null || vertical !== undefined;
    // const overflow = determinedDirection ?
    //     vertical ?
    //     getStyle(el, 'overflow-y') :
    //     getStyle(el, 'overflow-x') :
    //     getStyle(el, 'overflow');
    // return overflow.match(/(scroll|auto)/);
    // This code from Elemnt UI can't decated correctly in some situation.
    return getStyle(el, 'overflow-y').match(/(scroll|auto)/) || getStyle(el, 'overflow-x').match(/(scroll|auto)/) || getStyle(el, 'overflow').match(/(scroll|auto)/);
};

const getScrollContainer = (el, vertical) => {
    // let parent = el.parentNode || el;
    let parent = el;
    while (parent) {
        if ([window, document, document.documentElement].includes(parent)) {
            return document;
        }
        if (isScroll(parent, vertical)) {
            return parent;
        }
        parent = parent.parentNode;
    }

    return parent;
};

export default {
    getStyle,
    isInContainer,
    isScroll,
    getScrollContainer
}