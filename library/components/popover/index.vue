<template>
    <div :class="className" @click.stop="handleMouseClick" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <slot></slot>

        <div :class="contentClassName" @click.stop>
            <transition mode="in-out">
                <div v-if="vvalue">
                    <q-panel class="content-panel customize-content" border v-if="$slots.content">
                        <div class="indicator"></div>
                        <slot name="content"></slot>
                    </q-panel>
                    <q-panel class="content-panel template-content" border v-else :style="{ width }">
                        <div class="indicator"></div>
                        <q-title class="title" :level="6" v-if="title">{{title}}</q-title>
                        <q-text class="text" v-if="text">{{text}}</q-text>
                        <div class="controller" v-if="confirmText || cancelText">
                            <q-button size="small" v-if="cancelText" @click.stop="doEmitClickEvent('cancel')">{{cancelText}}</q-button>
                            <q-button size="small" type="primary" v-if="confirmText" @click.stop="doEmitClickEvent('confirm')">{{confirmText}}</q-button>
                        </div>
                    </q-panel>
                </div>
            </transition>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-popover {
    display: inline-block;
    position: relative;

    .content {
        position: absolute;
        .transition();
        .content-panel {
            box-shadow: @color-light-secondary-background 0px 8px 0px -4px;
        }
    }

    .content[class*="actived"] {
        padding: 2*@grid;
    }

    .template-content {
        text-align: center;
        padding: 2*@grid;

        .title {
            margin: 0px;
            margin-bottom: @grid;
        }

        .controller {
            margin: 0px;
            margin-top: @grid;

            .q-button {
                padding: @grid/2 2*@grid;
                margin: 0px @grid/2;
            }
        }
    }

    .indicator {
        background: white;
        position: absolute;
        width: @grid;
        height: @grid;
        // .transition();
    }

    /******* Top *******/

    .content[class~="position-top-left"] {
        top: 0px;
        left: -2*@grid;
        transform: translate(0, -100%);

        .indicator {
            border-bottom: 1px solid @color-light-decorate;
            border-right: 1px solid @color-light-decorate;
            bottom: 12px;
            left: 3*@grid;
            transform: rotate(45deg);
        }
    }

    .content[class~="position-top"] {
        top: 0px;
        left: 50%;
        transform: translate(-50%, -100%);

        .indicator {
            border-bottom: 1px solid @color-light-decorate;
            border-right: 1px solid @color-light-decorate;
            bottom: 12px;
            left: 50%;
            transform: translate(-50%, 0) rotate(45deg);
        }

    }

    .content[class~="position-top-right"] {
        top: 0px;
        right: -2*@grid;
        transform: translate(0, -100%);

        .indicator {
            border-bottom: 1px solid @color-light-decorate;
            border-right: 1px solid @color-light-decorate;
            bottom: 12px;
            right: 3*@grid;
            transform: rotate(45deg);
        }
    }

    /******* Bottom *******/

    .content[class~="position-bottom-left"] {
        bottom: 0px;
        left: -2*@grid;
        transform: translate(0, 100%);

        .indicator {
            border-top: 1px solid @color-light-decorate;
            border-left: 1px solid @color-light-decorate;
            top: 12px;
            left: 3*@grid;
            transform: rotate(45deg);
        }
    }

    .content[class~="position-bottom"] {
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 100%);

        .indicator {
            border-top: 1px solid @color-light-decorate;
            border-left: 1px solid @color-light-decorate;
            top: 12px;
            left: 50%;
            transform: translate(-50%, 0) rotate(45deg);
        }
    }

    .content[class~="position-bottom-right"] {
        bottom: 0px;
        right: -2*@grid;
        transform: translate(0, 100%);

        .indicator {
            border-top: 1px solid @color-light-decorate;
            border-left: 1px solid @color-light-decorate;
            top: 12px;
            right: 3*@grid;
            transform: rotate(45deg);
        }
    }

    /******* Left *******/

    .content[class~="position-left-top"] {
        top: -2*@grid;
        left: 0px;
        transform: translate(-100%, 0);

        .indicator {
            border-top: 1px solid @color-light-decorate;
            border-right: 1px solid @color-light-decorate;
            top: 3*@grid;
            right: 12px;
            transform: rotate(45deg);
        }
    }

    .content[class~="position-left"] {
        top: 50%;
        left: 0px;
        transform: translate(-100%, -50%);

        .indicator {
            border-top: 1px solid @color-light-decorate;
            border-right: 1px solid @color-light-decorate;
            top: 50%;
            right: 12px;
            transform: translate(0, -50%) rotate(45deg);
        }
    }

    .content[class~="position-left-bottom"] {
        bottom: -2*@grid;
        left: 0px;
        transform: translate(-100%, 0);

        .indicator {
            border-top: 1px solid @color-light-decorate;
            border-right: 1px solid @color-light-decorate;
            bottom: 3*@grid;
            right: 12px;
            transform: rotate(45deg);
        }
    }

    /******* Right *******/

    .content[class~="position-right-top"] {
        top: -2*@grid;
        right: 0px;
        transform: translate(100%, 0);

        .indicator {
            border-bottom: 1px solid @color-light-decorate;
            border-left: 1px solid @color-light-decorate;
            top: 3*@grid;
            left: 12px;
            transform: rotate(45deg);
        }
    }

    .content[class~="position-right"] {
        top: 50%;
        right: 0px;
        transform: translate(100%, -50%);

        .indicator {
            border-bottom: 1px solid @color-light-decorate;
            border-left: 1px solid @color-light-decorate;
            top: 50%;
            left: 12px;
            transform: translate(0, -50%) rotate(45deg);
        }
    }

    .content[class~="position-right-bottom"] {
        bottom: -2*@grid;
        right: 0px;
        transform: translate(100%, 0);

        .indicator {
            border-bottom: 1px solid @color-light-decorate;
            border-left: 1px solid @color-light-decorate;
            bottom: 3*@grid;
            left: 12px;
            transform: rotate(45deg);
        }
    }

    /******* Transition *******/

    .v-enter-active, .v-leave-active {
        .transition();
    }

    .v-enter, .v-leave-to {
        opacity: 0;
    }
    
}

.q-popover[class*="theme-dark"] {
    .content .indicator {
        background: @color-dark-background;
        border-color: @color-dark-decorate;
    }

    .content .content-panel {
        box-shadow: @color-dark-secondary-background 0px 8px 0px -4px;
    }
}
</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";

export default {
    mixins: [mixins],
    model: {
        prop: "open",
        event: "change"
    },
    props: {
        mode: {
            type: String,
            default: "hover",
            validator(value){
                return utils.validator(value).belongsTo("none", "click", "hover");
            }
        },
        position: {
            type: String,
            default: "top",
            validator(value) {
                return utils.validator(value).belongsTo(
                    "top-left", "top", "top-right",
                    "bottom-left", "bottom", "bottom-right",
                    "left-top", "left", "left-bottom",
                    "right-top", "right", "right-bottom",
                );
            }
        },
        width: {
            type: String,
            default: "100px"
        },
        title: String,
        text: String,
        confirmText: String,
        cancelText: String,
    },
    data(){
        return {
            meta: {
                name: "popover",
                model: {
                    prop: "open",
                    event: "change"
                },
            },
            vvalue: false
        }
    },
    computed: {
        className(){
            return this.computeClass({
                position: this.position,
                actived: this.vvalue
            });
        },
        contentClassName(){
            return this.computeClass({
                "content": true,
                position: this.position,
                actived: this.vvalue
            }, false);
        }
    },
    mounted(){
        document.addEventListener("click", this.handleDeactived);
    },
    destroyed(){
        document.removeEventListener("click", this.handleDeactived);
    },
    methods: {
        handleDeactived(){
            this.setVvalue(false);
        },
        handleMouseClick(){
            if(this.mode === "click") {
                this.setVvalue(!this.vvalue);
            }
        },
        handleMouseOver(){
            if(this.mode == "hover"){
                this.setVvalue(true);
            }
        },
        handleMouseLeave(){
            if(this.mode == "hover"){
                this.setVvalue(false);
            }
        },
        doEmitClickEvent(name){
            this.$emit(name);
            this.setVvalue(false);
        }
    }
}
</script>