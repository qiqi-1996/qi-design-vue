<template>
    <div :class="className" @click="duang">
        <div class="border">
            <div :class="classState"></div>
            <transition name="fade">
                <q-icon name="correct" v-show="vvalue"></q-icon>
            </transition>
        </div>
        <q-text><slot></slot></q-text>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-checkbox {
    display: inline-block;
    cursor: pointer;

    .border {
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
        .transition();
        position: relative;
    }

    .q-text {
        margin-left: @grid;
        display: inline-block;
        vertical-align: middle;
    }

    .selected {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 2px;
        left: 2px;
        transform: scale(1);
        .transition();
    }

    .selected[class*="active"] {
        transform: scale(0);
    }

    .q-icon {
        position: absolute;
        top: 1px;
        left: 0px;
        margin: 0px;
        padding: 0px;
        width: 20px;
        line-height: 20px;
        text-align: center;
        font-weight: bolder;
    }
}

.disable {
    opacity: 0.5;
    pointer-events: none;
}

/******* Visual Style *******/

.q-checkbox[class*="theme-light"] {
    .border {
        background: @color-light-decorate;
    }
    .selected {
        background: @color-light-background;
    }
}

.q-checkbox[class*="theme-dark"] {
    .border {
        background: @color-dark-decorate;
    }
    .selected {
        background: @color-dark-background;
    }
}

.q-checkbox[class*="theme-dark"][class*="active"] {
    .border {
        background: @color-dark-foreground;
    }

    .q-icon {
        color: @color-dark-background;
    }
}

.q-checkbox[class*="theme-light"][class*="active"] {
    .border {
        background: @color-light-foreground;
    }

    .q-icon {
        color: @color-light-background;
    }
}

.q-checkbox-colors(@colorname) {
    @varname: "color-@{colorname}";

    .q-checkbox[class*="theme-light"][class*="@{varname}"] {
        .border {
            background: @color-light-decorate;
        }
        .selected {
            background: @color-light-background;
        }
        .q-icon {
            color: @color-white;
        }
    }

    .q-checkbox[class*="theme-dark"][class*="@{varname}"] {
        .border {
            background: @color-dark-decorate;
        }
        .selected {
            background: @color-dark-background;
        }
        .q-icon {
            color: @color-white;
        }
    }

    .q-checkbox[class*="theme-light"][class*="active"][class*="@{varname}"] {
        .border {
            background: @@varname;
        }
    }

    .q-checkbox[class*="theme-dark"][class*="active"][class*="@{varname}"] {
        .border {
            background: lighten(@@varname, @config-lighten);
        }
    }

}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-checkbox-colors(@colorname);
}
.loop(length(@color-list));

/******* Transition *******/

.fade-enter-active, .fade-leave-active {
    .transition(all);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(1.5);
}

</style>

<script>
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    model: {
        event: "change",
        prop: "mvalue"
    },
    props: {
        value: {},
        mvalue: {},
        default: Boolean,
        disable: Boolean,
    },
    data(){
        return {
            meta: {
                name: "checkbox",
                model: {
                    event: "change",
                    prop: "mvalue"
                },
            },
            scope: null,
            vvalue: false
        }
    },
    mounted(){
        this.scope = this.findParentByMeta({name: "form-group"});
        if(this.scope){
            if(!this.scope.initValueType("set")){
                this.scope = null;
            }
        }
        if(this.default){
            this.setVvalue(true);
            this.scope && this.scope.setValue(this.value);
        }
    },
    computed: {
        className(){
            return this.computeClass({
                "disable": this.disable,
                "active": this.vvalue
            })
        },
        classState(){
            return this.computeClass({
                "selected": "selected",
                "active": this.vvalue
            }, false);
        }
    },
    methods: {
        duang(){
            let result = !this.vvalue;
            this.setVvalue(result);
            if(result){
                this.scope && this.scope.setValue(this.value);
            }else{
                this.scope && this.scope.deleteValue(this.value);
            }
        }
    }
}
</script>