<template>
    <div :class="className" @click.stop="duang" ref="component">
        <p :class="['value', vvalue?'':'empty']">{{text || placeholder || "..."}}</p>
        <i class="iconfont icon-down"></i>
        <transition :name="'toggle-'+direction">
            <div :class="['menu', direction]" v-show="open" ref="menu" :style="{ maxHeight: maxHeight + 'px'}">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

/******* Universal *******/

.q-select {
    .font-text();
    .transition();

    text-align: left;
    width: 150px;
    display: inline-block;
    padding: @grid;
    cursor: pointer;
    position: relative;
}

.value {
    margin: 0px;
    .font-text();
    color: unset;
}

.menu {
    .transition();
    position: absolute;
    color: initial;
    left: -1px;
    width: 100%;
    // top: 100%;
    z-index: @top;
    max-height: 300px;
    overflow: hidden;
    overflow-y: auto;
}

.up {
    bottom: 100%;
}

.down {
    top: 100%;
}

.iconfont {
    transform: scale(0.8);
    .transition();
}

.q-select[class*="theme-light"] {
    color: @color-light-foreground;
    border: 1px solid @color-light-decorate;
    background: @color-light-background;

    .empty {
        color: @color-light-secondary-text;
    }

    .menu {
        border: 1px solid @color-light-decorate;
        background: @color-light-background;
    }

    .iconfont {
        .font-note();
        position: absolute;
        right: @grid;
        bottom: @grid;
    }
}

.q-select[class*="theme-dark"] {
    color: @color-dark-foreground;
    border: 1px solid @color-dark-decorate;
    background: @color-dark-background;

    .empty {
        color: @color-dark-secondary-text;
    }
    
    .menu {
        border: 1px solid @color-dark-decorate;
        background: @color-dark-background;
    }

    .iconfont {
        .font-note();
        color: @color-dark-secondary-text;
        position: absolute;
        right: @grid;
        bottom: @grid;
    }
}

.q-select[class*="theme-light"][class*="color-poe"]:hover {
    color: @color-light-foreground;
    border-color: @color-light-foreground;

    .menu {
        border-color: @color-light-foreground;
    }

    .iconfont {
        color: @color-light-foreground;
    }
}

.q-select[class*="theme-dark"][class*="color-poe"]:hover {
    color: @color-dark-foreground;
    border-color: @color-dark-foreground;

    .menu {
        border-color: @color-dark-foreground;
    }

    .iconfont {
        color: @color-dark-foreground;
    }
}

.q-select-hover-colors(@colorname){
    @varname: "color-@{colorname}";

    .q-select[class*="theme-light"][class*=~"color-@{colorname}"]:hover {
        color: @@varname;
        border-color: @@varname;

        .menu {
            border-color: @@varname;
        }

        .iconfont {
            color: @@varname;
        }
    }

    .q-select[class*="theme-dark"][class*=~"color-@{colorname}"]:hover {
        color: lighten(@@varname, @config-lighten);
        border-color: lighten(@@varname, @config-lighten);

        .menu {
            border-color: lighten(@@varname, @config-lighten);
        }

        .iconfont {
            color: lighten(@@varname, @config-lighten);
        }
    }
}

/******* State *******/

.open[class*="direction-down"] {
    border-bottom-color: transparent !important;

    .iconfont {
        transform: rotate(180deg) scale(0.8);
        transform-origin: 50% 40%;
    }

    .menu {
        border-top-color: transparent !important;
    }
}

.open[class*="direction-up"] {
    border-top-color: transparent !important;

    .iconfont {
        transform: rotate(180deg) scale(0.8);
        transform-origin: 50% 40%;
    }

    .menu {
        border-bottom-color: transparent !important;
    }
}

/******* Transition *******/

.toggle-down-enter-active, .toggle-down-leave-active {
    .transition(all, 500ms);
}
.toggle-down-enter, .toggle-down-leave-to {
    transform: scaleY(0) translateY(-100%);
    transform-origin: 50% 0%;
    opacity: 0;
}

.toggle-up-enter-active, .toggle-up-leave-active {
    .transition(all, 500ms);
}
.toggle-up-enter, .toggle-up-leave-to {
    transform: scaleY(0) translateY(100%);
    transform-origin: 50% 100%;
    opacity: 0;
}

/******* State *******/

.disable {
    opacity: 0.5;
    pointer-events: none;
}

// .disable[class*="theme-light"] {
//     opacity: 0.5;
//     pointer-events: none;
//     background-image: url("~@/assets/disable-light.png");
//     background-size: 20%;
// }

// .disable[class*="theme-dark"] {
//     opacity: 0.8;
//     pointer-events: none;
//     background-image: url("~@/assets/disable-dark.png");
//     background-size: 20%;
// }

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));

    @colorname: extract(@color-list, @counter);
    .q-select-hover-colors(@colorname);
}
.loop(length(@color-list));
</style>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";

export default {
    mixins: [mixins],
    props: {
        disable: Boolean,
        placeholder: String,
        maxHeight: {
            type: Number,
            default: 300,
        }
    },
    data(){
        return {
            meta: {
                id: null,
                name: "select"
            },
            vvalue: "",
            text: "",
            open: false,
            direction: "down"
        }
    },
    computed: {
        className(){
            return this.computeClass({
                disable: this.disable,
                open: this.open,
                direction: this.direction
            });
        }
    },
    mounted(){
        document.addEventListener("click", this.close);
        utils.event.on("select-close", this.close)
    },
    beforeDestroy(){
        document.removeEventListener("click", this.close);
        utils.event.off("select-close", this.close)
    },
    methods: {
        duang(){
            let rect = this.$refs.component.getBoundingClientRect();
            if((rect.y || rect.top) + rect.height + this.maxHeight > document.body.clientHeight){
                this.direction = "up";
            }else{
                this.direction = "down";
            }
            this.open = !this.open;
            utils.event.emit("select-close", this.meta.id);
        },
        close(id){
            if(this.meta.id != id){
                this.open = false;
            }
        },
        doSelect(value, text){
            this.vvalue = value;
            this.text = text;
            this.open = false;
            this.$emit("change", {value, text});
        }
    }
}
</script>