<template>
    <div :class="className">
        <div v-html="html"></div>
        <pre ref="text" style="display: none;">
            <slot></slot>
        </pre>
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

/******* Base *******/

.markdown-container {
    /deep/ h1 {
        .font-headline(2);
        margin-top: 4*@grid;
        margin-bottom: 4*@grid;
    }

    /deep/ h2 {
        .font-title(2);
        margin-top: 4*@grid;
        margin-bottom: 4*@grid;
    }

    /deep/ h3, h4, h5, h6 {
        .font-subtitle(2);
        margin-top: 2*@grid;
        margin-bottom: 2*@grid;
    }

    /deep/ p {
        .font-text(2);
        margin-top: 2*@grid;
        margin-bottom: 2*@grid;
    }

    /deep/ pre code {
        display: block;
        margin: 3*@grid 0px;
        padding: 3*@grid;
        background: @color-light-secondary-background;
    }

    /deep/ code {
        margin: @grid/2 0px;
        padding: @grid/2;
        background: @color-light-secondary-background;
    }
}

.markdown-container[class*="theme-dark"] {
    /deep/ h1, /deep/ h2, /deep/ h3, /deep/ h4, /deep/ h5, /deep/ h6 {
        color: @color-dark-foreground;
    }

    /deep/ code {
        background: @color-dark-secondary-background;
    }
}
</style>

<script>
import mixins from "@/core/mixins.js";
import marked from "marked/marked.min.js";
import hljs from "highlight.js/lib/highlight.js";
import "highlight.js/styles/default.css";

marked.setOptions({
    highlight: function (code, language, callback) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    }
});

export default {
    mixins: [mixins],
    data(){
        return {
            ovserver: null,
            html: ""
        }
    },
    computed: {
        className(){
            return this.computeClass({
                "markdown-container": "markdown-container"
            });
        }
    },
    mounted(){
        // let node = this.$refs["text"];
        // let config = { attributes: true, childList: true, subtree: true };
        // this.observer = new MutationObserver(()=>{ this.render() });
        // this.observer.observe(node, config);

        this.render();
    },
    beforeDestroy(){
        // this.observer.disconnect();
    },
    methods: {
        render(){
            let text = this.$refs["text"].innerText;
            text = text.split("\n").map((value)=>{
                return value.trim();
            }).join("\n");
            this.html = marked(text);
        }
    }
}
</script>