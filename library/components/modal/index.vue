<template>
    <q-mask :class="className" v-model="vvalue" :noclose="noclose">
        <transition>
            <q-panel class="modal-panel" v-show="vvalue" border shadow>
                <slot></slot>
            </q-panel>
        </transition>
    </q-mask>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-modal {

    /deep/ .mask {
        padding: 2*@grid;
        width: calc(~"100% - "2*2*@grid);
        height: calc(~"100% - "2*2*@grid);
        text-align: center;
        overflow: auto;
    }
    
    /deep/ .mask::before {
        content:"";
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    }

    .modal-panel {
        display: inline-block;
        vertical-align: middle;
        text-align: left;
    }

    .v-enter-active, .v-leave-active {
        .transition();
    }

    .v-enter, .v-leave-to {
        transform: translate(0px, 32px);
        opacity: 0;
    }
}
</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";

export default {
    mixins: [mixins],
    props: {
        name: String,
        open: Boolean,
        noclose: Boolean
    },
    data(){
        return {
            meta: {
                name: "modal",
                model: {
                    prop: "open",
                    event: "change"
                }
            },
            vvalue: false
        }
    },
    mounted() {
        if (this.name) {
            utils.event.on(`q-modal-${this.name}-do-open`, this.doOpen);
            utils.event.on(`q-modal-${this.name}-do-close`, this.doClose);
        }
    },
    computed: {
        className() {
            return this.computeClass({});
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
}
</script>