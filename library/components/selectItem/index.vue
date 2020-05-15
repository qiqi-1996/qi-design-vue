<template>
    <div :class="className" @click.stop="duang">
        <slot>
            {{text}}
        </slot>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-select-item {
    padding: 2*@grid;
    width: calc(~"100% - 2*2*@{grid}");
    // .transition();
}

.q-select-item[class*="theme-light"] {
    color: @color-light-foreground;
}

.q-select-item[class*="theme-light"][class*="color-poe"]:hover {
    color: @color-light-background;
    background: @color-light-foreground;
}

.q-select-item[class*="theme-dark"] {
    color: @color-dark-foreground;
}

.q-select-item[class*="theme-dark"][class*="color-poe"]:hover {
    color: @color-dark-background;
    background: @color-dark-foreground;
}

.q-dropmen-item-hover-colors(@colorname) {
    @varname: "color-@{colorname}";

    .q-select-item[class*="theme-light"][class*="color-@{colorname}"]:hover {
        color: @color-light-background;
        background: @@varname;
    }

    .q-select-item[class*="theme-dark"][class*="color-@{colorname}"]:hover {
        color: @color-dark-foreground;
        background: @@varname;
    }

}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-dropmen-item-hover-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        value: String,
        text: String
    },
    data(){
        return {
            meta: {
                name: "select-item"
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({});
        }
    },
    methods: {
        duang(){
            if(this.$parent.meta.name != "select"){
                return;
            }
            this.$parent.doSelect(this.value, this.text)
        }
    }
}
</script>