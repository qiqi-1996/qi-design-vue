<template>
    <span :class="className">
        <span v-show="show">
            <q-color-block class="badge" v-if="type==='primary'">{{value}}</q-color-block>
            <q-panel class="badge" border v-else-if="type==='default'">{{value}}</q-panel>
            <q-color-block class="badge" :size="8" round v-else></q-color-block>
        </span>
        <slot>

        </slot>
    </span>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-badge {
    position: relative;
    display: inline-block;

    .badge {
        .font-note();
        z-index: 1;
        border-radius: 20px;
        position: absolute;
    }
}

/*******  *******/

.q-badge[class*="theme-light"] .badge {
    border: 2px solid @color-light-background;
}

.q-badge[class*="theme-dark"] .badge {
    border: 2px solid @color-dark-background;
}

/******* Type *******/

.q-badge[class*="type-default"], .q-badge[class*="type-primary"] {
    .badge {
        padding: @grid/2 @grid;
    }
}

.position-left-top .badge{
    left: 0px;
    top: 0px;
    transform: translate(-50%, -50%);
}

.position-right-top .badge{
    right: 0px;
    top: 0px;
    transform: translate(50%, -50%);
}

.position-left-bottom .badge{
    left: 0px;
    bottom: 0px;
    transform: translate(-50%, 50%);
}

.position-right-bottom .badge{
    right: 0px;
    bottom: 0px;
    transform: translate(50%, 50%);
}

</style>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";

export default {
    mixins: [mixins],
    props: {
        value: String,
        show: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: "default",
            validator(value){
                return utils.validator(value).belongsTo([ "primary", "default", "dot" ]);
            }
        },
        position: {
            type: String,
            default: "right-top",
            validator(value){
                return utils.validator(value).belongsTo([
                    "left-top", "right-top",
                    "left_bottom", "right-bottom",
                ]);
            }
        }
    },
    data(){
        return {
            meta: {
                name: "badge"
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({
                position: this.position,
                type: this.type
            });
        }
    }
}
</script>