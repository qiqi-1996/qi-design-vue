<template>
    <span v-if="!data">
        <slot></slot>
    </span>
    <div v-else-if="!_item" :class="className('q-menu-container')" :style="{ zIndex: shouldOpen?1:0}" @click.stop="">
        <!-- 包裹层 -->
        <slot></slot>
        <div class="q-menu-wrapper">
            <!-- <transition name="show"> -->
            <!-- Transition 导致了意外的渲染错误，暂时去除 -->
                <q-panel border v-if="shouldOpen">
                    <q-menu
                        _item
                        :_root="config.root"
                        v-for="(item, index) in data"
                        :_haveIcon="state.haveIcon"
                        :_haveExpand="state.haveExpand"
                        :key="index"
                        :data="item"
                        :size="size"
                    >
                    </q-menu>
                </q-panel>
            <!-- </transition> -->
        </div>
    </div>
    <span v-else :class="className('q-menu-item')">
        <!-- 菜单项 -->
        <component v-if="data.is" :is="data.is"></component>
        <q-menu
            v-else
            :_root="config.root"
            :data="data.children"
            :open="control.open"
            position="right" 
            :size="size"
            :value="data.value"
        >
            <q-hover :hover="config.hover" @mouseenter.native="doControlOpen" @click="handleSelected" :style="{ paddingRight: _haveExpand?'32px':''}">
                <q-icon class="item-icon" v-show="_haveIcon" :name="data.icon"></q-icon>
                <span class="item-text">{{data.text}}</span>
                <span class="item-note" v-show="data.note" :style="{ marginRight: data.children?'16px':'0px'}">{{data.note}}</span>
                <q-icon class="item-expand" name="right" v-show="data.children"></q-icon>
            </q-hover>
        </q-menu>
    </span>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-menu-container {
    position: relative;
    text-align: left;
}

.q-menu-wrapper {
    position: absolute;
}

.q-menu-container[class*="full"] {
    display: inline-block;
    
    .q-menu-wrapper {
        width: 100%;
    }
}

/******* Position *******/

// Top

.position-top, .position-top-left {
    .q-menu-wrapper {
        top: 0px;
        left: 0px;
        transform: translate(0, -100%);
    }
}

.position-top-right {
    .q-menu-wrapper {
        top: 0px;
        right: 0px;
        transform: translate(0, -100%);
    }
}

// Bottom

.position-bottom, .position-bottom-left {
    .q-menu-wrapper {
        bottom: 0px;
        left: 0px;
        transform: translate(0, 100%);
    }
}

.position-bottom-right {
    .q-menu-wrapper {
        bottom: 0px;
        right: 0px;
        transform: translate(0, 100%);
    }
}

// Left

.position-left, .position-left-top {
    .q-menu-wrapper {
        left: 0px;
        top: 0px;
        transform: translate(-100%, 0);
    }
}

.position-left-bottom {
    .q-menu-wrapper {
        left: 0px;
        bottom: 0px;
        transform: translate(-100%, 0);
    }
}

// Right

.position-right, .position-right-top {
    .q-menu-wrapper {
        right: 0px;
        top: 0px;
        transform: translate(100%, 0);
    }
}

.position-right-bottom {
    .q-menu-wrapper {
        right: 0px;
        bottom: 0px;
        transform: translate(100%, 0);
    }
}

/******* Item Style *******/

.q-menu-item[class*="size-small"] .q-hover {
    .font-note();
    padding: @grid;
    cursor: pointer;
}

.q-menu-item[class*="size-normal"] .q-hover {
    padding: 2*@grid;
    cursor: pointer;
}

.q-menu-item {
    position: relative;
    white-space: nowrap;

    .item-icon, .item-text, .item-note {
        display: inline-block;
        vertical-align: middle;
    }

    .item-icon { 
        width: 14px;
        margin-right: @grid;
        vertical-align: bottom;
    }

    .item-note {
        margin-left: @grid;
        // margin-right: 2*@grid;
        text-align: right;
        opacity: 0.5;
    }

    .item-expand {
        position: absolute;
        float: right;
        clear: both;
        right: 0px;
        margin-top: 3px;
        margin-right: @grid;
        opacity: 0.5;
    }
}

.q-menu-item[class*="size-small"] {
    .item-expand {
        .font-note();
        margin-top: 1px;
    }
}

/******* Vue Transition *******/

.show-enter-active, .show-leave-active {
    .transition();
}

.show-enter, .show-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import { cloneDeep } from "lodash-es";

const hover = {
    border: "none",
    color: "default"
}

export default {
    mixins: [mixins],
    model: {
        prop: "open",
        event: "change"
    },
    props: {
        open: {},
        full: Boolean,
        value: {},
        data: {},
        size: {
            type: String,
            default: "normal",
            validator(value){
                return utils.validator(value).belongsTo("small", "normal")
            }
        },
        position: {
            type: String,
            default: "bottom",
            validator(value){
                return utils.validator(value).belongsTo(
                    "top",
                    "top-left",
                    "top-right",
                    "bottom",
                    "bottom-left",
                    "bottom-right",
                    "left",
                    "left-top",
                    "left-bottom",
                    "right",
                    "right-top",
                    "right-bottom",
                )
            }
        },

        _item: Boolean,
        _haveIcon: Boolean,
        _haveExpand: Boolean,
        _root: {},
        _values: {
            type: Array,
            default: ()=>[]
        }
    },
    data(){
        return {
            meta: {
                id: null,
                name: "menu",
                model: {
                    prop: "open",
                    event: "change"
                },
            },
            config: {
                hover,
                root: (()=>{
                    return this._root || this;
                })()
            },
            state: {
                haveIcon: false,
                haveExpand: false,
            },
            control: {
                open: false
            }
        }
    },
    watch:{
        open(value){
            if(typeof value === "boolean"){
                this.control.open = value;
            }
            if(!this._item && this.data && Array.isArray(this.data)){
                for(let i in this.data){
                    if(this.data[i].icon){
                        this.state.haveIcon = true;
                    }
                    if(this.data[i].children && Array.isArray(this.data[i].children)){
                        this.state.haveExpand = true;
                    }
                }
            }
        }
    },
    mounted(){
        let id = this.$parent.meta?.id;
        id && utils.event.on(`q-menu-close-${id}`, this.doControlClose);

        if(!this._root){
            utils.event.on("q-menu-close", this.doFullyClose);
            document.addEventListener("click", this.doFullyClose);
        }
    },
    beforeDestroy(){
        let id = this.$parent.meta?.id;
        id && utils.event.off(`q-menu-close-${id}`, this.doControlClose);
    },
    computed: {
        shouldOpen(){
            if(!this._root){
                // 如果 _root prop 为空，则表示自身是根菜单
                if(typeof this.open === "boolean"){
                    return this.open;
                }else{
                    return (this.open === this.value)
                }
            }else{
                return this.control.open;
            }
        }
    },
    methods: {
        className(extra){
            return this.computeClass({
                [extra]: true,
                "position": this.position,
                "size": this.size,
                "full": this.full,
            });
        },
        doControlOpen(){
            // if(this.data.children){
                let id = this.$parent.meta?.id;
                id && utils.event.emit(`q-menu-close-${id}`, ()=>{
                    this.control.open = true;
                })
            // }
        },
        doControlClose(callback){
            this.control.open = false;
            this.$nextTick(()=>{
                callback && callback();
            })
        },
        doFullyClose(callback){
            if(typeof this.open === "boolean"){
                this.setVvalue(false);
            }else{
                this.setVvalue("");
            }
            this.$nextTick(()=>{
                callback && typeof callback === "function" && callback();
            })
        },
        handleSelected(){
            if(this.data.children){
                return;
            }

            let result = cloneDeep(this.data);

            this.config.root.$emit("select", result);
            this._root.doFullyClose();
        }
    }
}
</script>