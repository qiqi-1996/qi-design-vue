<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-image {
    .image {
        width: 100%;
        height: 100%;
    }
}

.q-image[class*="theme-dark"] {
    opacity: 0.7;
}

.q-image[class*="mode-"] {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.q-image[class*="mode-fill"] .image {
    width: 100%;
    height: 100%;
}

/******* Cover *******/

.q-image[class*="mode-cover"][class*="image-vertical"][class*="container-vertical"] {
    .image {
        width: 100%;
        height: auto;
    }
}

.q-image[class*="mode-cover"][class*="image-horizontal"][class*="container-vertical"] {
    .image {
        width: auto;
        height: 100%;
    }
}

.q-image[class*="mode-cover"][class*="image-vertical"][class*="container-horizontal"] {
    .image {
        width: auto;
        height: 100%;
    }
}

.q-image[class*="mode-cover"][class*="image-horizontal"][class*="container-horizontal"] {
    .image {
        width: 100%;
        height: auto;
    }
}

/******* Contain *******/

.q-image[class*="mode-contain"][class*="image-vertical"][class*="container-vertical"] {
    .image {
        width: auto;
        height: 100%;
    }
}

.q-image[class*="mode-contain"][class*="image-horizontal"][class*="container-vertical"] {
    .image {
        width: 100%;
        height: auto;
    }
}

.q-image[class*="mode-contain"][class*="image-vertical"][class*="container-horizontal"] {
    .image {
        width: 100%;
        height: auto;
    }
}

.q-image[class*="mode-contain"][class*="image-horizontal"][class*="container-horizontal"] {
    .image {
        width: auto;
        height: 100%;
    }
}

/******* Scale Down *******/

.q-image[class*="mode-scale-down"][class*="image-vertical"][class*="container-vertical"] {
    .image {
        width: auto;
        height: 100%;
    }
}

.q-image[class*="mode-scale-down"][class*="image-horizontal"][class*="container-vertical"] {
    .image {
        width: 100%;
        height: auto;
    }
}

.q-image[class*="mode-scale-down"][class*="image-vertical"][class*="container-horizontal"] {
    .image {
        width: 100%;
        height: auto;
    }
}

.q-image[class*="mode-scale-down"][class*="image-horizontal"][class*="container-horizontal"] {
    .image {
        width: auto;
        height: 100%;
    }
}
</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import settings from "@qiqi1996/qi-design-vue/core/settings.js";
import { throttle } from "lodash-es";

const isSupportObjectFit = () =>
    document.documentElement.style.objectFit !== undefined;

export default {
    mixins: [mixins],
    render() {
        if (this.mode === "") {
            if (this.imageState === "loading") {
                if (this.loading === true) {
                    return <q-icon name="loading" animation="rotate"></q-icon>;
                } else if (this.loading && typeof this.loading === "object") {
                    const Loading = this.loading;
                    return (<Loading />);
                } else {
                    return <img class={this.className}></img>;
                }
            } else if(this.imageState === "error"){
                if (this.error === true) {
                    return (<q-icon container="q-footnote" name="warning"></q-icon>);
                } else if (this.error && typeof this.error === "object") {
                    const Error = this.error;
                    return (<Error />);
                } else {
                    return <img class={this.className}></img>;
                }
            } else {
                return <img class={this.className} src={this.imageSrc}></img>;
            }
        } else {
            return (
                <div class={this.className} ref="container">
                    {(() => {
                        if (this.imageState === "loading") {
                            if (this.loading === true) {
                                return (
                                    <div class="loading">
                                        <q-icon
                                            name="loading"
                                            animation="rotate"
                                        ></q-icon>
                                    </div>
                                );
                            } else if (this.loading && typeof this.loading === "object") {
                                const Loading = this.loading;
                                return (<Loading />);
                            } else {
                                return <img></img>;
                            }
                        } else if(this.imageState === "error"){
                            if (this.error === true) {
                                return (<q-icon container="q-footnote" name="warning"> Loading Failed.</q-icon>);
                            } else if (this.error && typeof this.error === "object") {
                                const Error = this.error;
                                return (<Error />);
                            } else {
                                return <img></img>;
                            }
                        } else {
                            return (
                                <img
                                    class="image"
                                    src={this.imageSrc}
                                    style={this.imageFitStyle}
                                ></img>
                            );
                        }
                    })()}
                </div>
            );
        }
    },
    props: {
        mode: {
            type: String,
            default: "",
            validator(value) {
                return utils
                    .validator(value)
                    .belongsTo(
                        "",
                        "none",
                        "fill",
                        "cover",
                        "contain",
                        "scale-down"
                    );
            }
        },
        lazy: {
            type: Boolean,
            default: () => settings.defaults.image_lazy
        },
        src: String,
        srcDark: String,
        loading: {
            default: () => settings.defaults.image_loading
        },
        error: {
            default: () => settings.defaults.image_error
        }
    },
    data() {
        return {
            meta: {
                name: "image"
            },
            scrollContainer: null,
            scrollHandler: null,
            state: {
                // none | loading | done | error
                light: "none",
                dark: "none"
            },
            size: {
                light: {
                    width: 0,
                    height: 0
                },
                dark: {
                    width: 0,
                    height: 0
                },
                container: {
                    width: 0,
                    height: 0
                }
            }
        };
    },
    watch: {
        src(src) {
            this.loadImage(src, "light");
        },
        srcDark(src) {
            this.loadImage(src, "dark");
        },
        _theme: {
            handler(theme) {
                if (this.state[theme] === "none") {
                    this.loadImage(this[`src-${theme}`], theme);
                }
            }
        }
    },
    mounted() {
        let isVertical =
            this.size[this._theme].width / this.size[this._theme].height < 1;
        this.scrollContainer = utils.dom.getScrollContainer(this.$el);
        this.scrollHandler = throttle(this.handleLazyScroll, 200);
        this.src && this.loadImage(this.src, "light");
        this.srcDark && this.loadImage(this.srcDark, "dark");
        this.getContainerSize();
        if (this.lazy) {
            this.scrollContainer.addEventListener("scroll", this.scrollHandler);
        }
    },
    beforeDestroy() {
        this.scrollContainer.removeEventListener("scroll", this.scrollHandler);
    },
    computed: {
        ["src-light"]() {
            // Only to make the property access more convenient, nothing more.
            return this.src;
        },
        ["src-dark"]() {
            return this.srcDark;
        },
        className() {
            if (!isSupportObjectFit()) {
                let isImageVertical =
                    this.size[this._theme].width /
                        this.size[this._theme].height <
                    1;
                let isContainerVertical =
                    this.size["container"].width /
                        this.size["container"].height <
                    1;
                return this.computeClass({
                    mode: this.mode,
                    image: isImageVertical ? "vertical" : "horizontal",
                    container: isContainerVertical ? "vertical" : "horizontal"
                });
            } else {
                return this.computeClass({
                    mode: this.mode,
                });
            }
        },
        imageFitStyle() {
            if (isSupportObjectFit()) {
                return {
                    objectFit: this.mode
                };
            } else if (this.mode == "scale-down") {
                return {
                    maxWidth: this.size[this._theme].width + "px",
                    maxHeight: this.size[this._theme].height + "px"
                };
            }
            return {};
        },
        imageSrc() {
            // if(this.state[this._theme] !== "done"){
            //     return "";
            // }
            if (this._theme == "dark" && this.srcDark) {
                return this.srcDark;
            } else {
                return this.src;
            }
        },
        imageState() {
            return this.state[this._theme];
        }
    },
    methods: {
        loadImage(url, theme) {
            if (this.state[theme] === "done" || !url) {
                return;
            }
            if (
                this.lazy === true &&
                (!this.isVisible() || theme !== this._theme)
            ) {
                return;
            }
            let img = new Image();
            img.onload = () => {
                this.state[theme] = "done";
                this.size[theme].width = img.width;
                this.size[theme].height = img.height;
            };
            img.onerror = () => {
                this.state[theme] = "error";
            };
            this.state[theme] = "loading";

            img.src = url;
        },
        isVisible() {
            return utils.dom.isInContainer(this.$el, this.scrollContainer);
        },
        handleLazyScroll(evt) {
            if (this.isVisible()) {
                this.loadImage(this[`src-${this._theme}`], this._theme);
            }
        },
        getContainerSize() {
            let container = this.$refs["container"];
            if (!container) {
                return false;
            }
            this.size.container.width = container.clientWidth;
            this.size.container.height = container.clientHeight;
            console.log(this.size.container);
            return true;
        }
    }
};
</script>