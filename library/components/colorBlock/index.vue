<template>
    <div :class="className" :style="style"><slot></slot></div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-color-block {
    width: 16px;
    height: 16px;
    .transition();
}

.q-color-block[class*="theme-light"] {
    background: @color-light-foreground;
}

.q-color-block[class*="theme-dark"] {
    background: @color-dark-foreground;
}

.q-color-block-colors(@colorname){
    @varname: "color-@{colorname}";

    .q-color-block[class*="@{varname}"] {
        background: @@varname;
    }

    .q-color-block[class*="@{varname}"] {
        background: lighten(@@varname, @config-lighten);
    }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-color-block-colors(@colorname);
}
.loop(length(@color-list));
</style>

<script>
import mixins from "@/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        mode: {
            default: "static"
        },
        size: {
            type: Number,
            default: 16
        },
        round: Boolean
    },
    data(){
        return {
            meta: {
                name: "color-block"
            }
        }
    },
    computed: {
        className() {
            return this.computeClass({});
        },
        style(){
            let result = {};
            if(this.size){
                result.width = this.size + "px"
            }
            if(this.size){
                result.height= this.size + "px"
            }
            if(this.round){
                result.borderRadius = (this.round?this.size:0) + "px"
                result.overflow = "hidden";
            }
            return result;
        }
    }
}
</script>