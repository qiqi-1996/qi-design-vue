<template>
    <component :is="container || 'i'" :class="className"><slot></slot></component>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-icon {
    display: inline-block;
    vertical-align: middle;
    margin: 0px;
    padding: 0px;
    .transition();
}

// .q-icon[class*="theme-light"][class*="color-poe"] {
//     color: @color-light-foreground;
// }

// .q-icon[class*="theme-dark"][class*="color-poe"] {
//     color: @color-dark-foreground;
// }

.q-icon-colors(@colorname) {
    @varname: "color-@{colorname}";

    .q-icon[class*="theme-light"][class*=~"color-@{colorname}"] {
        color: @@varname;
    }

    .q-icon[class*="theme-dark"][class*=~"color-@{colorname}"] {
        color: lighten(@@varname, @config-lighten);
    }
}

/******* Animations *******/

.animation-rotate {
    animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-icon-colors(@colorname);
}
.loop(length(@color-list));
</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";

export default {
    mixins: [mixins],
    props: {
        type: String,
        name: String,
        container: String,
        animation: {
            type: String,
            validator(value){
                if(!value){
                    return true;
                }
                return utils.validator(value).belongsTo(
                    "rotate",
                )
            }
        }
    },
    data(){
        return {
            meta: {
                name: "icon"
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({
                [this.type]: !!this.type,
                "animation": this.animation,
                "iconfont": !this.type,
                "icon": this.name
            })
        }
    }
}
</script>