<template>
    <q-panel :class="className">
        <div class="container">
            <slot>
                <q-icon class="input-icon" :name="icon" v-show="icon"></q-icon>
                <q-divider class="input-icon-divider" type="vertical" v-show="icon"></q-divider>
            </slot>
            <input class="input" v-bind="$attrs" @focus="handleFocus" @blur="handleBlur" @input="handleInput" :value="vvalue" />
        </div>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-input {
    .font-text();
    display: inline-block;
    .transition();
    // overflow: hidden;

    .container {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .input-icon {
        text-align: center;
        position: relative;
        display: inline-block;
        vertical-align: middle;
    }

    .input-icon-divider {
        display: inline-block;
        vertical-align: middle;
        height: 16px;
        position: relative;
    }

    .input {
        width: 100%;
        display: inline-block;
        vertical-align: middle;
        background: transparent;
        margin: -2px;
        border: none;
        outline: none;
    }
}

.q-input[class*="theme-light"] {
    box-shadow: @color-light-decorate 0px 0px 0px 1px;
}

.q-input[class*="theme-dark"] {
    box-shadow: @color-dark-decorate 0px 0px 0px 1px;
}

.q-input[class*="disable"] {
    opacity: 0.5;
    pointer-events: none;
}

.q-input[class*="size-small"] {
    .input-icon {
        padding: 0px @grid/2;
        font-size: 14px;
    }

    .input {
        padding: 4px;
        font-size: 12px;
    }
}

.q-input[class*="size-medium"] {
    .input-icon {
        padding: 0px @grid;
        font-size: 16px;
    }

    .input {
        padding: @grid;
        font-size: 14px;
    }
}

.q-input[class*="size-large"] {
    .input-icon {
        padding: 0px @grid*2;
        font-size: 24px;
    }

    .input {
        padding: 2*@grid;
        font-size: 16px;
    }
}

/******* Font Color *******/

.q-input[class*="theme-light"] .input {
    color: @color-light-foreground;
}

.q-input[class*="theme-dark"] .input {
    color: @color-dark-foreground;
}

/******* focused *******/

.q-input[class*="theme-light"][class*="color-poe"][class*="focused"] {
    box-shadow: @color-light-foreground 0px 0px 0px 2px;
}

.q-input[class*="theme-dark"][class*="color-poe"][class*="focused"] {
    box-shadow: @color-dark-foreground 0px 0px 0px 2px;
}

.q-input-focused-colors(@colorname) {
    @varname: "color-@{colorname}";
    
    .q-input[class*="theme-light"][class*=~"color-@{colorname}"][class*="focused"] {
        box-shadow: @@varname 0px 0px 0px 2px;
    }

    .q-input[class*="theme-dark"][class*=~"color-@{colorname}"][class*="focused"] {
        box-shadow: lighten(@@varname, @config-lighten) 0px 0px 0px 2px;
    }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-input-focused-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";

export default {
    mixins: [mixins],
    model: {
        prop: "value",
        event: "change"
    },
    props: {
        disable: Boolean,
        icon: {
            type: String
        },
        size: {
            type: String,
            default: "medium",
            validator(value){
                return utils.validator(value).belongsTo("small", "medium", "large");
            }
        },
        value: String
    },
    data(){
        return {
            meta: {
                name: "input",
                model: {
                    prop: "value",
                    event: "change"
                },
            },
            vvalue: "",
            focused: false
        }
    },
    computed: {
        className(){
            return this.computeClass({
                size: this.size,
                disable: this.disable,
                focused: this.focused
            });
        }
    },
    methods: {
        handleFocus(){
            this.focused = true;
        },
        handleBlur(){
            this.focused = false;
        },
        handleInput(evt){
            this.setVvalue(evt.target.value);
        }
    }
}
</script>