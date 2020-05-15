<template>
    <div :class="className"></div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.type-horizontal[class*="theme-light"] {
    width: 100%;
    border-bottom: 1px solid @color-light-decorate;
}

.type-horizontal[class*="theme-dark"] {
    width: 100%;
    border-bottom: 1px solid @color-dark-decorate;
}

.type-vertical[class*="theme-light"] {
    height: 100%;
    border-left: 1px solid @color-light-decorate;
}

.type-vertical[class*="theme-dark"] {
    height: 100%;
    border-left: 1px solid @color-dark-decorate;
}
</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";

export default {
    mixins: [mixins],
    props: {
        type: {
            default: "horizontal",
            type: String,
            validator(value) {
                return utils.validator(value).belongsTo(
                    "horizontal",
                    "vertical"
                );
            }
        }
    },
    data(){
        return {
            meta: {
                name: "divider"
            }
        }
    },
    computed: {
        className() {
            return this.computeClass({
                type: this.type
            });
        }
    }
};
</script>