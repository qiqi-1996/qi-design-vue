<template>
    <div :class="className">
        <div class="controller" v-show="title" @click="duang">
            <q-title class="title" :level="titleLevel" :colorful="titleColorful">{{title}}</q-title>
            <q-icon class="indicator" name="right" container="q-footnote"></q-icon>
        </div>
        <div :class="['content', transition?'transition':'']" :style="contentStyle" @transitionend="handleTransitionEnd" ref="content">
            <div :class="title?'content-margin':''">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-collapse {
    .controller {
        padding: 2*@grid;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
    }

    .title {
        margin: 0px;
    }

    .indicator {
        margin: 0px;
        position: absolute;
        right: 2*@grid;
        top: 50%;
        transform: translateY(-50%);
    }

    .transition {
        .transition();
    }

    .content-margin {
        margin: 2*@grid;
        margin-top: 0px;
    }
}

.q-collapse[class*="actived"] .indicator {
    transform: rotate(90deg) translateY(0%) translateX(-50%);
    top: calc(~"50% - 4px");
    // transform-origin: 100% 0%;
}
</style>

<script>
import mixins from "@/core/mixins.js";

export default {
    mixins: [mixins],
    model: {
        prop: "value",
        event: "cahnge"
    },
    props: {
        value: Boolean,
        title: String,
        titleLevel: {
            type: Number,
            default: 3
        },
        titleColorful: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            meta: {
                name: "collapse",
                model: { prop: "value", event: "cahnge" }
            },
            vvalue: false,
            transition: false,
            contentStyle: {
                height: "0px",
                overflow: "hidden"
            }
        }
    },
    watch: {
        vvalue(val){
            let dom = this.$refs["content"];
            if(val){
                // Expand
                this.transition = true;
                this.contentStyle.height = "0px";
                setTimeout(()=>{
                    this.contentStyle.height = dom.scrollHeight + "px";
                });
            }else{
                // Collapse
                this.transition = true;
                this.contentStyle.height = dom.clientHeight + "px";
                this.contentStyle.overflow = "hidden";
                setTimeout(()=>{
                    this.contentStyle.height = "0px";
                });
            }
        }
    },
    computed: {
        className() {
            return this.computeClass({
                "actived": this.vvalue
            });
        }
    },
    methods: {
        duang() {
            this.setVvalue(!this.vvalue);
        },
        handleTransitionEnd(evt){
            if(evt.target !== this.$refs["content"]){
                return;
            }
            this.transition = false;
            if(this.vvalue){
                this.contentStyle.height = "auto";
                this.contentStyle.overflow = "";
            }else{
                this.contentStyle.height = "0px";
                this.contentStyle.overflow = "hidden";
            }
        }
    }
}
</script>