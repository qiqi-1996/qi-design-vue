<template>
    <p :class="className"><slot></slot></p>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-footnote {
    .font-note(0);
    .transition();

    /deep/ strong {
        font-weight: bolder;
    }
}

.q-footnote[class*="mode-single"] {
    .font-note(0);
}

.q-footnote[class*="mode-compact"] {
    .font-note(1);
}

.q-footnote[class*="mode-normal"] {
    .font-note(2);
}

.q-footnote[class*="theme-light"] {
    color: @color-light-secondary-text;
}

.q-footnote[class*="theme-dark"] {
    color: @color-dark-secondary-text;
}

</style>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";
import settings from "@/core/settings.js";

export default {
    mixins: [mixins],
    props: {
        mode: {
            type: String,
            default: ()=>(settings.defaults.footnote_mode || settings.defaults.typography_mode),
            validator(value){
                return utils.validator(value).belongsTo("single", "compact", "normal")
            }
        },
    },
    data(){
        return {
            meta: {
                name: "footnote"
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({
                mode: this.mode
            });
        }
    }
}
</script>