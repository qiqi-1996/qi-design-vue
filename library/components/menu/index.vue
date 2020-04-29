<template>
    <span v-if="!data">
        <slot></slot>
    </span>
    <div v-else-if="!_item" :class="className('q-menu-container')" :style="{ zIndex: open?1:0}">
        <!-- 包裹层 -->
        <slot></slot>
        <div class="q-menu-wrapper">
            <transition name="show">
                <q-panel border v-if="open">
                    <q-menu
                        _item
                        :_root="config.root"
                        v-for="(item, index) in data"
                        :key="index"
                        :data="item"
                        :size="size"
                    >
                    </q-menu>
                </q-panel>
            </transition>
        </div>
    </div>
    <span v-else :class="className('q-menu-item')">
        <!-- 菜单项 -->
        <q-menu
            :_root="config.root"
            :data="data.children"
            :open="control.open"
            position="right" 
            :size="size"
            :value="data.value"
        >
            <q-hover :hover="config.hover" @mouseenter.native="doControlOpen" @click="handleClick">
                <q-icon class="item-icon" v-show="data.icon" :name="data.icon"></q-icon>
                <span class="item-text">{{data.text}}</span>
                <span class="item-note" v-show="data.note" :style="{ marginRight: data.children?'16px':'0px'}">{{data.note}}</span>
                <q-icon class="item-expand" name="right" v-show="data.children"></q-icon>
            </q-hover>
        </q-menu>
    </span>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

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
        margin-right: @grid;
        vertical-align: bottom;
    }

    .item-note {
        margin-left: @grid;
        // margin-right: 2*@grid;
        opacity: 0.5;
    }

    .item-expand {
        position: absolute;
        right: 0px;
        margin-top: 3px;
        margin-right: @grid;
        opacity: 0.5;
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
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";

const hover = {
    border: "none",
    color: "default"
}

export default {
    mixins: [mixins],
    props: {
        open: Boolean,
        full: Boolean,
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
        _root: {},
    },
    mounted(){
        let id = this.$parent.meta?.id;
        id && utils.event.on(`q-menu-close-${id}`, this.doControlClose);
    },
    beforeDestroy(){
        let id = this.$parent.meta?.id;
        id && utils.event.off(`q-menu-close-${id}`, this.doControlClose);
    },
    watch:{
        open(value){
            if(!value && this.control?.open){
                this.control.open = false;
            }
        }
    },
    data(){
        return {
            meta: {
                id: null,
                name: "menu",
            },
            config: {
                hover,
                root: (()=>{
                    return this._root || this;
                })()
            },
            control: {
                open: false
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
            let id = this.$parent.meta?.id;
            id && utils.event.emit(`q-menu-close-${id}`, ()=>{
                this.control.open = true;
            })
        },
        doControlClose(callback){
            this.control.open = false;
            this.$nextTick(()=>{
                callback && callback();
            })
        },
        handleClick(){
            this.config.root.$emit("select", {
                value: this.data.value
            });
        }
    }
}
</script>