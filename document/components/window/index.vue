<i18n src="./i18n.json"></i18n>

<template>
    <q-panel :class="className" border shadow>
        <div class="title-bar">
            <div class="controller">
                <q-color-block :size="12" round color="enjolras" class="item"></q-color-block>
                <q-color-block :size="12" round color="sunflower" class="item"></q-color-block>
                <q-color-block :size="12" round color="spring" class="item"></q-color-block>
            </div>
            <q-hover :config="config.title" class="title" v-show="title">{{title}}</q-hover>
            <q-hover :config="config.source" class="source" v-show="source" @click="openLink"><q-icon name="code"></q-icon>{{ $t("code") }}</q-hover>
        </div>
        <slot></slot>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    display: inline-block;
    border-radius: 5px;
    padding: 16px;
    padding-top: 32px;
    position: relative;
}

.title-bar {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;

    .controller {
        float: left;
        text-align: left;
        padding: 10px;
        font-size: 0px;
        white-space: nowrap;

        .item {
            margin-right: 5px;
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
        }
    }

    .title {
        font-size: 12px;
        position: absolute;
        margin: 0px;
        margin-top: @grid;
        top: 0px;
        left: 0px;
        width: 100%;
        text-align: center;
    }

    .source {
        cursor: pointer;
        font-size: 12px;
        position: absolute;
        margin: 0px;
        margin-top: @grid + 4px;
        margin-right: 4px;
        top: 0px;
        right: @grid;

        .q-icon {
            vertical-align: top;
            margin-right: @grid/2;
        }
    }
}

.window {
    /deep/ img {
        max-width: initial;
        max-height: initial;
    }

    // /deep/ * { margin: 0px }
}
</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        title: String,
        source: String,
    },
    data(){
        return {
            config: {
                title: {
                    default: {
                        border: "none",
                        color: "none",
                        text: "secondary"
                    },
                    hover: {
                        border: "none",
                        color: "none",
                        text: "inherit"
                    }
                },
                source: {
                    default: {
                        border: "none",
                        color: "none",
                        text: "default"
                    },
                    hover: {
                        border: "none",
                        color: "none",
                        text: "inherit"
                    }
                }
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({
                "window": true
            })
        }
    },
    methods: {
        openLink(){
            let url = `https://github.com/qiqi-1996/qi-design-vue/blob/master/document/pages/usage/children/${this.source}/example/index.vue`;
            window.open(url);
        }
    }
}
</script>