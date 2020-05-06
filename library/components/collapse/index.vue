<template>
    <div :class="className">
        <div class="controller" v-show="title" @click="duang">
            <q-title class="title" :level="titleLevel">{{title}}</q-title>
            <q-icon class="indicator" name="right" container="q-footnote"></q-icon>
        </div>
        <div :class="['content', transition?'transition':'']" :style="contentStyle" @transitionend="handleTransitionEnd" ref="content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-collapse {
    .controller {
        position: relative;
        cursor: pointer;
    }

    .title {
        margin: 0px;
    }

    .indicator {
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
    }

    .transition {
        .transition();
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
                this.$nextTick(()=>{
                    this.contentStyle.height = dom.scrollHeight + "px";
                });
            }else{
                // Collapse
                this.transition = true;
                this.$nextTick(()=>{
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
            if(evt.target !== this.$refs["content"].$el){
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