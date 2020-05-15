<template>
    <q-hover :active="active" :config="config">
        <q-image :theme="imageTheme" :src="imageLight" :src-dark="imageDark" width="auto" height="32px"></q-image>
        <span class="title"><slot></slot></span>
    </q-hover>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-hover {
    padding: @grid;

    .component {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
    }

    .q-image, .title {
        display: inline-block;
        vertical-align: middle;
    }

    .q-image {
        margin-left: 2*@grid;
        margin-right: 2*@grid;
    }
}
</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        active: Boolean,
        imageLight: String,
        imageDark: String
    },
    data(){
        return {
            config: {
                hover: {
                    border: "none"
                },
                actived: {
                    color: "inherit",
                    border: "none"
                }
            }
        }
    },
    computed: {
        imageTheme() {
            if(this._theme === "light"){
                return this.active?'dark':'light';
            }else{
                return this.active?'light':'dark';
                if(this._color === "poe"){
                    return this.active?'light':'dark';
                }else{
                    return this.active?'dark':'dark';
                }
            }
        }
    }
}
</script>