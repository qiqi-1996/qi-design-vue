<script>
// From ElmentUI: https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js

function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || "").split(" ");

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += " " + clsName;
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(" ");
    var curClass = " " + el.className + " ";

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(" " + clsName + " ", " ");
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

class Transition {
    beforeEnter(el) {
        addClass(el, "q-collapse-transition");
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = "0";
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    }

    enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + "px";
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
            el.style.height = "";
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }

        el.style.overflow = "hidden";
    }

    afterEnter(el) {
        // for safari: remove class then reset height is necessary
        removeClass(el, "q-collapse-transition");
        el.style.height = "";
        el.style.overflow = el.dataset.oldOverflow;
    }

    beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + "px";
        el.style.overflow = "hidden";
    }

    leave(el) {
        if (el.scrollHeight !== 0) {
            // for safari: add class after set height, or it will jump to zero height suddenly, weired
            addClass(el, "q-collapse-transition");
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    }

    afterLeave(el) {
        removeClass(el, "q-collapse-transition");
        el.style.height = "";
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
}

export default {
    name: "ElCollapseTransition",
    functional: true,
    render(h, { children }) {
        const data = {
            on: new Transition()
        };

        return h("transition", data, children);
    }
};
</script>