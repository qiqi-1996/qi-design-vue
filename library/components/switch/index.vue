<template>
    <div :class="className" @click="duang">
        <div class="slider">
            <!-- <q-icon :theme="busyIconTheme" name="waiting" animation="rotate"></q-icon> -->
        </div>
        <input 
            :value="vvalue"
            type="hidden"
        />
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

/******* Universal *******/

.q-switch {
    .noselect();
    display: inline-block;
    height: 22px;
    min-width: 38px;
    border-radius: 22px;
    cursor: pointer;

    .transition(all, 500ms);
}

.slider {
    width: 16px;
    height: 16px;
    border-radius: 16px;
    margin-top: 3px;
    margin-left: 0%;
    transform: translate(3px, 0px);

    .transition(all, 500ms);
}

.q-icon {
    position: relative;
    font-size: 14px;
    left: 1px;
    top: -2px;
}

/******* Body *******/

.q-switch[class*="theme-light"] {
    border: 1px solid @color-light-decorate;
}

.q-switch[class*="theme-dark"] {
    border: 1px solid @color-dark-decorate;
}

/******* Slider *******/

.q-switch[class*="theme-light"][class*="color-poe"] .slider {
    background: @color-light-foreground;
}

.q-switch[class*="theme-dark"][class*="color-poe"] .slider {
    background: @color-dark-foreground;
}

.slider-color(@colorname) {
    @varname: "color-@{colorname}";
    .q-switch[class*="color-@{colorname}"] .slider {
        background: @@varname;
    }
}

/******* Active *******/

.q-switch[class*="active"] .slider {
    // transform: translate(calc(~"-100% - 3px"), 0px);
    margin-left: 3px;
    transform: translate(100%, 0px);
}

.q-switch[class*="active"][class*="theme-light"][class*="color-poe"] {
    background: @color-light-foreground;
    .slider {
        background: @color-light-background;
    }
}

.q-switch[class*="active"][class*="theme-dark"][class*="color-poe"] {
    background: @color-dark-foreground !important;
    .slider {
        background: @color-dark-background !important;
    }
}

.q-switch-active-colors(@colorname){
    .q-switch[class*="active"][class*="theme-light"][class*="color-@{colorname}"] {
        @varname: "color-@{colorname}";
        background: @@varname;
        .slider {
            background: @color-light-background;
        }
    }

    .q-switch[class*="active"][class*="theme-dark"][class*="color-@{colorname}"] {
        @varname: "color-@{colorname}";
        background: lighten(@@varname, @config-lighten);
        .slider {
            background: @color-dark-foreground;
        }
    }
}

/******* Size *******/

.q-switch[class*="size-small"] {
    height: 14px;
    min-width: 22px;
    
    .slider {
        width: 8px;
        height: 8px;
    }

    .q-icon {
        font-size: 16px;
        position: relative;
        left: -4px;
        top: -6px;
    }
}

.q-switch[class*="size-large"] {
    height: 30px;
    min-width: 54px;
    
    .slider {
        width: 24px;
        height: 24px;
    }

    .q-icon {
        position: relative;
        font-size: 16px;
        left: 4px;
        top: 2px;
    }
}

/******* Disable *******/

.disable {
    pointer-events: none;
    opacity: 0.5;
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));

    @colorname: extract(@color-list, @counter);
    .slider-color(@colorname);
    .q-switch-active-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";

export default {
    mixins: [mixins],
    model: {
        event: "change"
    },
    props: {
        size: {
            type: String,
            default: "medium",
            validator(value){
                return utils.validator(value).belongsTo("small", "medium", "large");
            }
        },
        busy: Boolean,
        value: Boolean,
        disable: Boolean,
    },
    data(){
        return {
            meta: {
                name: "switch",
                model: {
                    event: "change"
                }
            },
            vvalue: false
        }
    },
    computed: {
        // busyIconTheme() {
        //     if(this.size === "small"){
        //         if(this._theme==="light"){
        //             return this.vvalue?'dark':'light'
        //         }else{
        //             return this.vvalue?'light':'dark'
        //         }
        //     }else{
        //         if(this._theme==="light"){
        //             return this.vvalue?'light':'dark'
        //         }else{
        //             return this.vvalue?'dark':'light'
        //         }
        //     }
        // },
        className(){
            return this.computeClass({
                "busy": this.busy,
                "size": this.size,
                "disable": this.disable,
                "active": this.vvalue,
            })
        }
    },
    methods: {
        duang(){
            this.setVvalue(!this.vvalue);
        }
    }
}
</script>