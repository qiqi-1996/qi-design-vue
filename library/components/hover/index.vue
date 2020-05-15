<template>
    <div :class="className" @click="mockNativeClick"><slot></slot></div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-hover {
    .font-text();
    box-sizing: border-box;
    border: 1px solid transparent;
    .transition();
}

/******* Base *******/

.q-hover[class*="theme-light"] {
    color: @color-light-foreground;
}

.q-hover[class*="theme-dark"] {
    color: @color-dark-foreground;
}

/******* Default *******/

// Color

.q-hover[class*="theme-light"][class*="default-color-poe"] {
    background: @color-light-background;
}

.q-hover[class*="theme-dark"][class*="default-color-poe"] {
    background: @color-dark-background;
}

// Border

.q-hover[class*="theme-light"][class*="default-border-default"] {
    border-color: @color-light-decorate;
}

.q-hover[class*="theme-dark"][class*="default-border-default"] {
    border-color: @color-dark-decorate;
}

.q-hover[class*="theme-light"][class*="default-border-poe"] {
    border-color: @color-light-foreground;
}

.q-hover[class*="theme-dark"][class*="default-border-poe"] {
    border-color: @color-dark-foreground;
}

// Text

.q-hover[class*="theme-light"][class*="default-text-poe"] {
    color: @color-light-foreground;
}

.q-hover[class*="theme-dark"][class*="default-text-poe"] {
    color: @color-dark-foreground;
}

.q-hover[class*="theme-light"][class*="default-text-secondary"] {
    color: @color-light-secondary-text;
}

.q-hover[class*="theme-dark"][class*="default-text-secondary"] {
    color: @color-dark-secondary-text;
}

.q-hover-default-colors(@colorname){
    @varname: "color-@{colorname}";

    // Light

    .q-hover[class*="theme-light"][class*="default-color-@{colorname}"] {
        background: @@varname;
    }

    .q-hover[class*="theme-light"][class*="default-border-@{colorname}"] {
        border-color: @@varname;
    }

    .q-hover[class*="theme-light"][class*="default-text-@{colorname}"] {
        color: @@varname;
    }

    // Dark

    .q-hover[class*="theme-dark"][class*="default-color-@{colorname}"] {
        background: lighten(@@varname, @config-lighten);
    }

    .q-hover[class*="theme-dark"][class*="default-border-@{colorname}"] {
        border-color: lighten(@@varname, @config-lighten);
    }

    .q-hover[class*="theme-dark"][class*="default-text-@{colorname}"] {
        color: lighten(@@varname, @config-lighten);
    }
}

/******* Hover *******/

// Color

.q-hover[class*="theme-light"][class*="hover-color-default"]:not([class~="active"]):hover {
    background: @color-light-secondary-background;
}

.q-hover[class*="theme-light"][class*="hover-color-poe"]:not([class~="active"]):hover {
    background: @color-light-foreground;
    color: @color-light-background;
}

.q-hover[class*="theme-dark"][class*="hover-color-default"]:not([class~="active"]):hover {
    background: @color-dark-secondary-background;
}

.q-hover[class*="theme-dark"][class*="hover-color-poe"]:not([class~="active"]):hover {
    background: @color-dark-foreground;
    color: @color-dark-background;
}

// Border

.q-hover[class*="theme-light"][class*="hover-border-default"]:not([class~="active"]):hover {
    border-color: @color-light-decorate;
}

.q-hover[class*="theme-dark"][class*="hover-border-default"]:not([class~="active"]):hover {
    border-color: @color-dark-decorate;
}

// Text

.q-hover[class*="theme-light"][class*="hover-text-default"]:not([class~="active"]):hover {
    color: @color-light-foreground;
}

.q-hover[class*="theme-dark"][class*="hover-text-default"]:not([class~="active"]):hover {
    color: @color-dark-foreground;
}

.q-hover[class*="theme-light"][class*="hover-text-secondary"]:not([class~="active"]):hover {
    color: @color-light-secondary-text;
}

.q-hover[class*="theme-dark"][class*="hover-text-secondary"]:not([class~="active"]):hover {
    color: @color-dark-secondary-text;
}

.q-hover[class*="theme-light"][class*="hover-text-poe"]:not([class~="active"]):hover {
    color: @color-light-foreground;
}

.q-hover[class*="theme-dark"][class*="hover-text-poe"]:not([class~="active"]):hover {
    color: @color-dark-foreground;
}

.q-hover-hover-colors(@colorname){
    @varname: "color-@{colorname}";

    // Light

    .q-hover[class*="theme-light"][class*="hover-color-@{colorname}"]:not([class~="active"]):hover {
        color: @color-light-background;
        background: @@varname;
    }

    .q-hover[class*="theme-light"][class*="hover-border-@{colorname}"]:not([class~="active"]):hover {
        border-color: @@varname !important;
    }

    .q-hover[class*="theme-light"][class*="hover-text-@{colorname}"]:not([class~="active"]):hover {
        color: @@varname !important;
    }

    // Dark

    .q-hover[class*="theme-dark"][class*="hover-color-@{colorname}"]:not([class~="active"]):hover {
        color: @color-light-background;
        background: lighten(@@varname, @config-lighten);
    }

    .q-hover[class*="theme-dark"][class*="hover-border-@{colorname}"]:not([class~="active"]):hover {
        border-color: lighten(@@varname, @config-lighten) !important;
    }

    .q-hover[class*="theme-dark"][class*="hover-text-@{colorname}"]:not([class~="active"]):hover {
        color: lighten(@@varname, @config-lighten) !important;
    }
}

/******* Actived *******/

// Color

.q-hover[class~="active"][class*="theme-light"][class*="actived-color-poe"] {
    color: @color-light-background !important;
    background: @color-light-foreground;
}

.q-hover[class~="active"][class*="theme-dark"][class*="actived-color-poe"] {
    color: @color-dark-background !important;
    background: @color-dark-foreground;
}

// Border

.q-hover[class~="active"][class*="theme-light"][class*="actived-border-default"] {
    border-color: @color-light-decorate;
}

.q-hover[class~="active"][class*="theme-dark"][class*="actived-border-default"] {
    border-color: @color-dark-decorate;
}

.q-hover[class~="active"][class*="theme-light"][class*="actived-border-poe"] {
    border-color: @color-light-foreground;
}

.q-hover[class~="active"][class*="theme-dark"][class*="actived-border-poe"] {
    border-color: @color-dark-foreground;
}

// Text

.q-hover[class~="active"][class*="theme-light"][class*="actived-text-default"] {
    color: @color-light-foreground;
}

.q-hover[class~="active"][class*="theme-dark"][class*="actived-text-default"] {
    color: @color-dark-foreground;
}

.q-hover[class~="active"][class*="theme-light"][class*="actived-text-secondary"] {
    color: @color-light-secondary-text;
}

.q-hover[class~="active"][class*="theme-dark"][class*="actived-text-secondary"] {
    color: @color-dark-secondary-text;
}

.q-hover[class~="active"][class*="theme-light"][class*="actived-text-poe"] {
    color: @color-light-foreground;
}

.q-hover[class~="active"][class*="theme-dark"][class*="actived-text-poe"] {
    color: @color-dark-foreground;
}

.q-hover-actived-colors(@colorname){
    @varname: "color-@{colorname}";

    // Light

    .q-hover[class*="theme-light"][class~="active"][class*="actived-color-@{colorname}"] {
        color: @color-light-background;
        background: @@varname;
    }

    .q-hover[class*="theme-light"][class~="active"][class*="actived-border-@{colorname}"] {
        border-color: @@varname;
    }

    .q-hover[class*="theme-light"][class~="active"][class*="actived-text-@{colorname}"] {
        color: @@varname;
    }

    // Dark

    .q-hover[class*="theme-dark"][class~="active"][class*="actived-color-@{colorname}"] {
        color: @color-light-background;
        background: lighten(@@varname, @config-lighten);
    }

    .q-hover[class*="theme-dark"][class~="active"][class*="actived-border-@{colorname}"] {
        border-color: lighten(@@varname, @config-lighten);
    }

    .q-hover[class*="theme-dark"][class~="active"][class*="actived-text-@{colorname}"] {
        color: lighten(@@varname, @config-lighten);
    }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-hover-default-colors(@colorname);
    .q-hover-hover-colors(@colorname);
    .q-hover-actived-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        active: Boolean,
        config: Object,
        default: {
            type: Object,
            default(){
                return {
                    color: "none",
                    border: "none"
                }
            }
        },
        hover: {
            type: Object,
            default(){
                return {
                    color: "default",
                    border: "default"
                }
            }
        },
        actived: {
            type: Object,
            default(){
                return {
                    color: "inherit",
                    border: "none"
                }
            }
        }
    },
    data(){
        return {
            meta: {
                name: "hover"
            }
        }
    },
    computed: {
        _config(){
            return {
                default: this.config?.default || this.default,
                hover: this.config?.hover || this.hover,
                actived: this.config?.actived || this.actived
            }
        },
        className(){
            let defaultColor = (this._config.default.color==="inherit")?this._color:this._config.default.color || "default";
            let defaultBorder = (this._config.default.border==="inherit")?this._color:this._config.default.border || "default";
            let defaultText = (this._config.default.text==="inherit")?this._color:this._config.default.text || "default";

            let hoverColor = (this._config.hover.color==="inherit")?this._color:this._config.hover.color || "default";
            let hoverBorder = (this._config.hover.border==="inherit")?this._color:this._config.hover.border || "default";
            let hoverText = (this._config.hover.text==="inherit")?this._color:this._config.hover.text || "default";

            let activedColor = (this._config.actived.color==="inherit")?this._color:this._config.actived.color || "default";
            let activedBorder = (this._config.actived.border==="inherit")?this._color:this._config.actived.border || "default";
            let activedText = (this._config.actived.text==="inherit")?this._color:this._config.actived.text || "default";

            return this.computeClass({
                "default-color": defaultColor,
                "default-border": defaultBorder,
                "default-text": defaultText,

                "hover-color": hoverColor,
                "hover-border": hoverBorder,
                "hover-text": hoverText,

                "actived-color": activedColor,
                "actived-border": activedBorder,
                "actived-text": activedText,

                "active": this.active
            });
        }
    }
}
</script>