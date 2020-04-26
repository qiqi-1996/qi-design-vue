<template>
    <div :class="className">
        <div class="scroll-view" ref="scroll-view" :style="scrollViewStyle">
            <div class="tab-container" ref="tab-container" :style="tabContainerStyle">
                <slot></slot>
            </div>
            <div style="width: 72px; display: inline-block;" v-show="scroll"></div>
            <div class="indicator" ref="indicator" :style="indicatorStyle"></div>
        </div>
        <q-divider v-show="border"></q-divider>
        <div class="scroller" v-show="scroll">
            <q-button round @click.native="doScrollLeft"><i class="iconfont icon-left"></i></q-button>
            <q-button round @click.native="doScrollRight"><i class="iconfont icon-right"></i></q-button>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-tab {
    width: 100%;
    position: relative;

    .scroll-view {
        width: 100%;
        overflow: hidden;
        position: relative;
        white-space: nowrap;
    }

    .tab-container {
        display: inline-block;
        word-break: keep-all;
        white-space: nowrap;
        box-sizing: content-box;
    }

    .indicator {
        height: 3px;
        width: 16px;
        left: 0px;
        bottom: 0px;
        position: absolute;
        .transition(all, 500ms);
    }

    .scroller {
        position: absolute;
        bottom: @grid;
        right: @grid;

        .q-button {
            width: 32px;
            height: 32px;
            padding: @grid;
            display: inline-block;
            cursor: pointer;
        }
    }
}

/******* Indicator *******/

.q-tab[class*="theme-light"][class*="color-poe"] {
    .indicator {
        background: @color-light-foreground;
    }
}

.q-tab[class*="theme-dark"][class*="color-poe"] {
    .indicator {
        background: @color-dark-foreground;
    }
}

.indicator-color(@colorname) {
    @varname: "color-@{colorname}";

    .q-tab[class*="theme-light"][class*="color-@{colorname}"] {
        .indicator {
            background: @@varname;
        }
    }

    .q-tab[class*="theme-dark"][class*="color-@{colorname}"] {
        .indicator {
            background: lighten(@@varname, @config-lighten);
        }
    }
}

/******* Item *******/

.q-tab[class*="size-small"] {
    /deep/ .q-tab-item {
        font-size: 12px;
        padding: @grid;
    }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .indicator-color(@colorname);
}
.loop(length(@color-list));
</style>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";

export default {
    mixins: [mixins],
    model: {
        event: "change"
    },
    props: {
        value: true,
        size: {
            type: String,
            default: "normal",
            validator(value){
                return utils.validator(value).belongsTo("small", "normal");
            }
        },
        align: {
            type: String,
            default: "left",
            validator(value){
                return utils.validator(value).belongsTo("left", "center", "right");
            }
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            meta: {
                name: "tab",
                id: null,
                model: {
                    event: "change"
                }
            },
            tabs: {},
            indicatorStyle: {
                width: "16px",
                left: "0px",
                opacity: 0
            },
            scroll: false,
            scrollPosition: 0,
            timeoutID: null,
            current: null,

            // 当前激活的标签页key
            vvalue: 0,
        }
    },
    watch: {
        value: {
            handler(newValue){
                function f(obj){
                    if(!obj){
                        return obj
                    }
                    return obj
                }
                if((!this.current || newValue != this.current.value) && this.tabs[newValue]){
                    this.moveIndicator(this.tabs[newValue], false)
                }
            },
            immediate: true
        }
    },
    computed: {
        className(){
            return this.computeClass({
                size: this.size,
                border: this.border
            });
        },
        tabContainerStyle(){
            return {

            }
        },
        scrollViewStyle(){
            return {
                textAlign: this.align,
            }
        }
    },
    mounted(){
        window.addEventListener("resize", this.handleWindowResize);
    },
    beforeDestroy(){
        window.removeEventListener("resize", this.handleWindowResize);
    },
    methods: {
        handleWindowResize(){
            this.moveIndicator(this.current, false);
        },
        registerTab(options){
            if(options.value){
                this.$set(this.tabs, options.value, options);
            }
            this.handleItemChange();
        },
        removeTab(options){
            if(options.value){
                this.$delete(this.tabs, options.value);
                this.handleItemChange(options);
            }
        },
        handleItemChange(){
            if(this.timeoutID){
                clearTimeout(this.timeoutID);
            }
            this.timeoutID = setTimeout(()=>{
                let view = this.$refs["scroll-view"];
                let container = this.$refs["tab-container"];
                if(view && container && view.offsetWidth<container.offsetWidth){
                    this.scroll = true;
                }else{
                    this.scroll = false;
                }
                if(!this.current){
                    this.moveIndicator(this.tabs[Object.keys(this.tabs)[0]], false);
                }
            })
        },
        moveIndicator(options, emit = true){
            if(!options){
                return;
            }
            this.indicatorStyle.opacity = 1;
            if(this.size == "small"){
                this.indicatorStyle.width = "16px";
                this.indicatorStyle.left = (options.dom.offsetLeft + options.dom.offsetWidth/2 - 16/2) + "px";
            }else{
                this.indicatorStyle.width = options.dom.offsetWidth + "px";
                this.indicatorStyle.left = options.dom.offsetLeft + "px";
            }
            this.current = options;
            if(emit){
                this.setVvalue(options.value);
            }
        },
        doScrollLeft(){
            this.scrollPosition -= this.$refs["scroll-view"].offsetWidth/2;
            if(this.scrollPosition<0){
                this.scrollPosition = 0;
            }
            this.doSmoothScroll();
        },
        doScrollRight(){
            this.scrollPosition += this.$refs["scroll-view"].offsetWidth/2;
            if(this.scrollPosition > this.$refs["scroll-view"].scrollWidth - this.$refs["scroll-view"].offsetWidth){
                this.scrollPosition = this.$refs["scroll-view"].scrollWidth - this.$refs["scroll-view"].offsetWidth;
            }
            this.doSmoothScroll();
        },
        doSmoothScroll(){
            let ScrollView = this.$refs["scroll-view"];
            let offset = (this.scrollPosition - ScrollView.scrollLeft)/3;
            ScrollView.scrollLeft += offset;
            if(Math.abs(ScrollView.scrollLeft - this.scrollPosition) > 3){
                requestAnimationFrame(()=>{
                    this.doSmoothScroll();
                });
            }else{
                ScrollView.scrollLeft = this.scrollPosition;
            }
        }
    }
}
</script>