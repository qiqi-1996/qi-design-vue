<template>
    <div ref="item" :class="className" @click="duang"><slot>{{text}}</slot></div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-tab-item {
    display: inline-block;
    margin: 0px;
    padding: 2*@grid;
    cursor: pointer;
}

.q-tab-item[class*="theme-light"] {
    color: @color-light-foreground;
}

.q-tab-item[class*="theme-light"]:hover {
    opacity: 0.8;
    color: @color-light-foreground;
}

.q-tab-item[class*="theme-dark"] {
    color: @color-dark-foreground;
}

.q-tab-item[class*="theme-dark"]:hover {
    opacity: 0.8;
    color: @color-dark-foreground;
}

.q-tab-item-hover-colors(@colorname) {
    @varname: "color-@{colorname}";
    .q-tab-item[class*="theme-light"][class*="@{varname}"]:hover {
        color: @@varname;
    }

    .q-tab-item[class*="theme-dark"][class*="@{varname}"]:hover {
        color: lighten(@@varname, @config-lighten);
    }
}

/******* Disable *******/

.disable {
    opacity: 0.25;
    pointer-events: none;
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-tab-item-hover-colors(@colorname);
}
.loop(length(@color-list));
</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        value: {
            required: true
        },
        text: String,
        disable: Boolean
    },
    watch: {
        text(newValue){
            this.scope.handleItemChange(true);
        }
    },
    data(){
        return {
            meta: {
                name: "tab-item",
                id: null,
                scope: null
            }
        }
    },
    mounted(){
        this.scope = this.findParentByMeta({ name: "tab" });
        this.scope?.registerTab({
            dom: this.$refs.item,
            value: this.value,
            text: this.text
        });
    },
    beforeDestroy(){
        this.scope?.removeTab({
            dom: this.$refs.item,
            value: this.value,
            text: this.text
        });
    },
    computed: {
        className(){
            return this.computeClass({
                disable: this.disable
            });
        }
    },
    methods: {
        duang(){
            this.scope?.moveIndicator({
                dom: this.$refs.item,
                value: this.value
            });
        }
    }
}
</script>