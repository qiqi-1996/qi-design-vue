import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import settings from "@qiqi1996/qi-design-vue/core/settings.js";

import merge from "lodash/merge";

function toast(message, options = {}) {

    let opt = merge({}, options);

    opt.duration = opt.duration || settings.defaults.toast_duration;
    if (opt.duration === "auto") {
        let singleCharTiming = 125;
        opt.duration = message.length * singleCharTiming;
        message.match(/[a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)\_\+\,\.\/\<\>\?\[\]\\\{\}\|]*/g).forEach((string) => { opt.duration -= Math.floor(string.length * singleCharTiming / 3)*2 });
    }

    utils.event.emit("q-message-toast", message, opt);
}

export default {
    mixins,
    toast
}