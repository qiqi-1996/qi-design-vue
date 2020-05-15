<template>
    <div :class="className" @click="mockNativeClick"><slot></slot></div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-panel {
    .transition(all, 500ms);
}

.q-panel[class*="theme-light"] {
    color: @color-light-foreground;
    background: @color-light-background;
}

.q-panel[class*="theme-dark"] {
    color: @color-dark-foreground;
    background: @color-dark-background;
}

.q-panel[class*="theme-light"][class*="secondary"] {
    background: @color-light-secondary-background;
}

.q-panel[class*="theme-dark"][class*="secondary"] {
    background: @color-dark-secondary-background;
}

.q-panel[class*="theme-light"][class*="border"] {
    border: 1px solid @color-light-decorate;
}

.q-panel[class*="theme-dark"][class*="border"] {
    border: 1px solid @color-dark-decorate;
}

.q-panel[class*="theme-light"][class*="border"][class*="dashed"] {
    border: 1px dashed @color-light-decorate;
}

.q-panel[class*="theme-dark"][class*="border"][class*="dashed"] {
    border: 1px dashed @color-dark-decorate;
}

/******* Pure *******/

.q-panel[class*="theme-light"][class*="secondary"][class*="pure"] {
    background: #F5F5F5
}

.q-panel[class*="theme-dark"][class*="secondary"][class*="pure"] {
    background: #262626
}

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        secondary: Boolean,
        dashed: Boolean,
        border: Boolean,
        pure: Boolean,
    },
    data(){
        return {
            meta: {
                name: "panel"
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({
                secondary: this.secondary,
                border: this.border,
                dashed: this.dashed,
                pure: this.pure
            });
        }
    }
}
</script>