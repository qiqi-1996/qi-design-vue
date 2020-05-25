<template>
    <q-image :class="className" :src="src" :src-dark="srcDark" mode="cover"></q-image>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-avatar {
    width: 40px;
    height: 40px;
    overflow: hidden;
}

.q-avatar[class*="size-small"] {
    width: 24px;
    height: 24px;
}

.q-avatar[class*="size-large"] {
    width: 80px;
    height: 80px;
}


.q-avatar[class*="shape-circle"] {
    border-radius: 80px;
}

.q-avatar[class*="shape-rounded-square"][class*="size-small"] {
    border-radius: 2px;
}

.q-avatar[class*="shape-rounded-square"][class*="size-normal"] {
    border-radius: 4px;
}

.q-avatar[class*="shape-rounded-square"][class*="size-large"] {
    border-radius: 8px;
}

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import settings from "@qiqi1996/qi-design-vue/core/settings.js";

export default {
    mixins: [mixins],
    data(){
        return {
            meta: {
                name: "avatar"
            }
        }
    },
    props: {
        src: String,
        srcDark: String,
        size: {
            type: String,
            default: () => settings.defaults.avatar_size,
            validator(value){
                return utils.validator(value).belongsTo("small", "normal", "large");
            }
        },
        shape: {
            type: String,
            default: () => settings.defaults.avatar_shape,
            validator(value){
                return utils.validator(value).belongsTo("square", "rounded-square", "circle");
            }
        },

        lazy: {
            type: Boolean,
            default: () => settings.defaults.avatar_lazy || settings.defaults.image_lazy
        },
        loading: {
            default: () => settings.defaults.avatar_loading || settings.defaults.image_loading
        },
        error: {
            default: () => settings.defaults.avatar_error || settings.defaults.image_error
        }
    },
    computed: {
        className(){
            return this.computeClass({
                size: this.size,
                shape: this.shape
            });
        }
    }
}
</script>