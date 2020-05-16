import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import settings from "@qiqi1996/qi-design-vue/core/settings.js";

import cloneDeep from "lodash/cloneDeep";

function toast(message, options = {}) {

    let opt = cloneDeep(options);

    opt.duration = opt.duration || settings.defaults.toast_duration;
    if (opt.duration === "auto") {
        let singleCharTiming = 185;
        opt.duration = message.length * singleCharTiming;
        message.match(/[a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)\_\+\,\.\/\<\>\?\[\]\\\{\}\|]*/g).forEach((string) => { opt.duration -= string.length * singleCharTiming / 2 });
    }

    utils.event.emit("q-message-toast", message, opt);
}

export default {
    mixins,
    toast
}