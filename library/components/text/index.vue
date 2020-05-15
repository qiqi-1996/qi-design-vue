<template>
    <p :class="className"><slot></slot></p>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-text {
    .font-text();
    .transition();

    /deep/ strong {
        font-weight: bolder;
    }
}

.q-text[class*="mode-compact"] {
    .font-text(1);
}

.q-text[class*="mode-normal"] {
    .font-text(2);
}

.q-text[class*="theme-light"] {
    color: @color-light-foreground;
}

.q-text[class*="theme-dark"] {
    color: @color-dark-foreground;
}

.q-text-strong-colors(@colorname){
    @varname: "color-@{colorname}";

    .q-text[class*="theme-light"][class*=~"color-@{colorname}"] {
        /deep/ strong {
            color: @@varname;
        }
    }

    .q-text[class*="theme-dark"][class*=~"color-@{colorname}"] {
        /deep/ strong {
            color: lighten(@@varname, @config-lighten);
        }
    }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-text-strong-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import settings from "@qiqi1996/qi-design-vue/core/settings.js";

export default {
    mixins: [mixins],
    props: {
        mode: {
            type: String,
            default: ()=>(settings.defaults.text_mode || settings.defaults.typography_mode),
            validator(value){
                return utils.validator(value).belongsTo("single", "compact", "normal")
            }
        },
    },
    data(){
        return {
            meta: {
                name: "text"
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