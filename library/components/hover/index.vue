<template>
    <div :class="className" @click="mockNativeClick"><slot></slot></div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

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

.q-hover[class*="theme-light"][class*="default-color-poe"] {
    background: @color-light-background;
}

.q-hover[class*="theme-dark"][class*="default-color-poe"] {
    background: @color-dark-background;
}

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

.q-hover-default-colors(@colorname){
    @varname: "color-@{colorname}";
    .q-hover[class*="theme-light"][class*="default-color-@{colorname}"] {
        background: @@varname;
    }

    .q-hover[class*="theme-light"][class*="default-border-@{colorname}"] {
        border-color: @@varname;
    }

    .q-hover[class*="theme-dark"][class*="default-color-@{colorname}"] {
        background: lighten(@@varname, @config-lighten);
    }

    .q-hover[class*="theme-dark"][class*="default-border-@{colorname}"] {
        border-color: lighten(@@varname, @config-lighten);
    }
}

/******* Hover *******/

.q-hover[class*="theme-light"][class*="hover-color-default"]:not([class~="active"]):hover {
    background: @color-light-secondary-background;
}

.q-hover[class*="theme-light"][class*="hover-color-poe"]:not([class~="active"]):hover {
    background: @color-light-foreground;
    color: @color-light-background;
}

.q-hover[class*="theme-light"][class*="hover-border-default"]:not([class~="active"]):hover {
    border-color: @color-light-decorate;
}

.q-hover[class*="theme-dark"][class*="hover-color-default"]:not([class~="active"]):hover {
    background: @color-dark-secondary-background;
}

.q-hover[class*="theme-dark"][class*="hover-color-poe"]:not([class~="active"]):hover {
    background: @color-dark-foreground;
    color: @color-dark-background;
}

.q-hover[class*="theme-dark"][class*="hover-border-default"]:not([class~="active"]):hover {
    border-color: @color-dark-decorate;
}

.q-hover-hover-colors(@colorname){
    @varname: "color-@{colorname}";

    .q-hover[class*="theme-light"][class*="hover-color-@{colorname}"]:not([class~="active"]):hover {
        color: @color-light-background;
        background: @@varname;
    }

    .q-hover[class*="theme-light"][class*="hover-border-@{colorname}"]:not([class~="active"]):hover {
        border-color: @@varname !important;
    }

    .q-hover[class*="theme-dark"][class*="hover-color-@{colorname}"]:not([class~="active"]):hover {
        color: @color-light-background;
        background: lighten(@@varname, @config-lighten);
    }

    .q-hover[class*="theme-dark"][class*="hover-border-@{colorname}"]:not([class~="active"]):hover {
        border-color: lighten(@@varname, @config-lighten) !important;
    }
}

/******* Actived *******/

.q-hover[class~="active"][class*="theme-light"][class*="actived-color-poe"] {
    color: @color-light-background !important;
    background: @color-light-foreground;
}

.q-hover[class~="active"][class*="theme-dark"][class*="actived-color-poe"] {
    color: @color-dark-background !important;
    background: @color-dark-foreground;
}

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

.q-hover-actived-colors(@colorname){
    @varname: "color-@{colorname}";
    .q-hover[class*="theme-light"][class~="active"][class*="actived-color-@{colorname}"] {
        color: @color-light-background;
        background: @@varname;
    }

    .q-hover[class*="theme-light"][class~="active"][class*="actived-border-@{colorname}"] {
        border-color: @@varname;
    }

    .q-hover[class*="theme-dark"][class~="active"][class*="actived-color-@{colorname}"] {
        color: @color-light-background;
        background: lighten(@@varname, @config-lighten);
    }

    .q-hover[class*="theme-dark"][class~="active"][class*="actived-border-@{colorname}"] {
        border-color: lighten(@@varname, @config-lighten);
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
import mixins from "@/core/mixins.js";

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

            let hoverColor = (this._config.hover.color==="inherit")?this._color:this._config.hover.color || "default";
            let hoverBorder = (this._config.hover.border==="inherit")?this._color:this._config.hover.border || "default";

            let activedColor = (this._config.actived.color==="inherit")?this._color:this._config.actived.color || "default";
            let activedBorder = (this._config.actived.border==="inherit")?this._color:this._config.actived.border || "default";

            return this.computeClass({
                "default-color": defaultColor,
                "default-border": defaultBorder,
                "hover-color": hoverColor,
                "hover-border": hoverBorder,
                "actived-color": activedColor,
                "actived-border": activedBorder,

                "active": this.active
            });
        }
    }
}
</script>