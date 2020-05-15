<template>
    <div :class="className" @click="duang">
        <div class="border">
            <div :class="classState"></div>
        </div>
        <q-text><slot></slot></q-text>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-radio {
    display: inline-block;
    cursor: pointer;

    .border {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        display: inline-block;
        vertical-align: middle;
        .transition();
    }

    .q-text {
        margin-left: @grid;
        display: inline-block;
        vertical-align: middle;
    }

    .selected {
        position: relative;
        width: 16px;
        height: 16px;
        border-radius: 16px;
        top: 2px;
        left: 2px;
        transform: scale(1);
        .transition(all, 500ms);
    }

    .selected[class*="active"] {
        transform: scale(0.4);
    }
}

.disable {
    opacity: 0.5;
    pointer-events: none;
}

/******* Visual Style *******/

.q-radio[class*="theme-light"] {
    .border {
        background: @color-light-decorate;
    }
    .selected {
        background: @color-light-background;
    }
}

.q-radio[class*="theme-dark"] {
    .border {
        background: @color-dark-decorate;
    }
    .selected {
        background: @color-dark-background;
    }
}

.q-radio[class*="theme-dark"][class*="active"] {
    .border {
        background: @color-dark-foreground;
    }
}

.q-radio[class*="theme-light"][class*="active"] {
    .border {
        background: @color-light-foreground;
    }
}

.q-radio-colors(@colorname) {
    @varname: "color-@{colorname}";

    .q-radio[class*="theme-light"][class*="@{varname}"] {
        .border {
            background: @color-light-decorate;
        }
        .selected {
            background: @color-light-background;
        }
    }

    .q-radio[class*="theme-dark"][class*="@{varname}"] {
        .border {
            background: @color-dark-decorate;
        }
        .selected {
            background: @color-dark-background;
        }
    }

    .q-radio[class*="theme-light"][class*="active"][class*="@{varname}"] {
        .border {
            background: @@varname;
        }
        .selected {
            background: @color-white;
        }
    }

    .q-radio[class*="theme-dark"][class*="active"][class*="@{varname}"] {
        .border {
            background: lighten(@@varname, @config-lighten);
        }
        .selected {
            background: @color-white;
        }
    }

}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-radio-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    model: {
        event: "mevent",
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
                name: "radio",
            },
            selected: false
        }
    },
    mounted(){
        if(this.default || this.mvalue == this.value){
            this.duang({}, false);
        }
    },
    watch: {
        mvalue(newValue){
            if(newValue !== this.value){
                this.selected = false;
            }
            // this.$set(this.$data, "selected", (newValue === this.value));
        }
    },
    computed: {
        className(){
            return this.computeClass({
                "disable": this.disable,
                "active": this.selected
            })
        },
        classState(){
            return this.computeClass({
                "selected": "selected",
                "active": this.selected
            }, false);
        }
    },
    methods: {
        duang(evt, noemit){
            if(this.selected && this.mvalue){
                return;
            }
            this.selected = !this.selected;
            if(!noemit){
                this.$emit("change", this.selected);
                this.$emit("mevent", this.value);
            }
        }
    }
}
</script>