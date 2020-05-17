import settings from "./settings.js";
import utils from "./utils.js";

export default {
    props: {
        theme: String,
        color: String
    },
    data() {
        return {
            _themeNode: null
        }
    },
    beforeMount() {
        if (!this.$props.theme || !this.$props.theme) {
            this.$data._themeNode = this.findThemeNode();
        }
        // 关联 v-model prop 和 vvalue
        if (this.vvalue !== undefined) {
            let prop = this.meta?.model?.prop || "value";
            this.$watch(prop, (newValue) => {
                if (newValue!==undefined) {
                    this.vvalue = newValue;
                }
            }, {
                immediate: true
            });
        }
        if (this.meta && !this.meta?.id) {
            this.meta.id = utils.id();
        }
    },
    computed: {
        _color() {
            if (this.$props?.color) {
                return this.$props.color;
            }
            if (this.$data?._themeNode) {
                let result = this.$data._themeNode.$props.color || this.$data._themeNode._color
                if (result) {
                    return result;
                }
            }
            return "poe";
        },
        _theme() {
            if (this.$props?.theme) {
                return this.$props.theme;
            }
            if (this.$data?._themeNode) {
                let result = this.$data._themeNode.$props.theme || this.$data._themeNode._theme
                if (result) {
                    return result;
                }
            }
            return "light";
        }
    },
    methods: {
        computeClass(obj, addition = true) {
            let result = [];
            for (let key in obj) {
                if (typeof obj[key] === "boolean") {
                    if (obj[key]) {
                        result.push(key);
                    }
                }else if (obj[key] === key) {
                    result.push(key);
                } else if (obj[key]) {
                    result.push(key + "-" + obj[key]);
                }
            }
            if (addition) {
                result.push("theme-" + this._theme);
                result.push("color-" + this._color);
                if (this.meta?.name) {
                    result.push("q-" + this.meta.name);
                }
            }
            return result;
        },
        findParentByMeta(metadata) {
            if (!metadata) {
                return null;
            }
            var p = this.$parent
            while (p) {
                if (p.$data.meta) {
                    for (let key in metadata) {
                        if (metadata[key] != p.$data.meta[key]) {
                            break;
                        }
                        return p;
                    }
                }
                p = p.$parent;
            }
            return p;
        },
        findThemeNode(scope) {
            var p = scope?.$parent || this.$parent;
            while (p) {
                if(p._theme || p._color) {
                    return p
                } else if(p.$props?.theme || p.$props?.color) {
                    return p
                } else if (p.$data?.meta?.name == "theme") {
                    return p;
                } 
                p = p.$parent;
            }

            return p;
        },
        setVvalue(value) {
            if (this.vvalue !== undefined) {
                this.vvalue = value;
            }
            let event = this.meta.model?.event || "input";
            this.$emit(event, value);
        },
        mockNativeClick(evt) {
            this.$emit("click", evt);
        }
    }
}