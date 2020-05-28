<template>
    <div :class="className">
        <slot name="wrap"></slot>
        <transition>
            <div class="mask" v-show="vvalue" @click.self="doCloseByMask" :style="maskStyle">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-mask {
    .mask {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: fade(@color-white, 80%);
        z-index: @top;
    }
}

.q-mask[class*="wrap"] {
    position: relative;
    display: inline-block;
}

.q-mask[class*="theme-dark"] .mask {
    background: fade(@color-black, 80%);
}

/******* Transition *******/

.v-enter-active,
.v-leave-active {
    .transition();
}

.v-enter,
.v-leave-to {
    opacity: 0;
}
</style>

<script>
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    model: {
        prop: "open",
        event: "change"
    },
    props: {
        name: String,
        open: Boolean,
        noclose: Boolean
    },
    data() {
        return {
            meta: {
                name: "mask",
                model: {
                    prop: "open",
                    event: "change"
                }
            },
            vvalue: false
        };
    },
    mounted() {
        if (this.name) {
            utils.event.on(`q-mask-${this.name}-do-open`, this.doOpen);
            utils.event.on(`q-mask-${this.name}-do-close`, this.doClose);
        }
    },
    computed: {
        className() {
            return this.computeClass({
                wrap: !!this.$slots.wrap
            });
        },
        maskStyle() {
            return {
                position: !!this.$slots.wrap? "absolute":"fixed"
            }
        }
    },
    methods: {
        doOpen() {
            this.setVvalue(true);
        },
        doClose() {
            this.setVvalue(false);
        },
        doCloseByMask() {
            if (!this.noclose) {
                this.setVvalue(false);
            }
        }
    }
};
</script>