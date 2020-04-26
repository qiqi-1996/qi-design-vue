<template>
<q-panel secondary :class="className">
<pre>
<code>
<slot></slot>
</code>
</pre>
</q-panel>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.codeblock-container {
    padding: 0px;
    margin-top: 3*@grid;
    margin-bottom: 3*@grid;
}

pre{
    padding: 0px;
    margin: 0px;
}

code{
    padding: 0px !important;
    margin: 0px !important;
    line-height: 22px;
}
</style>

<script>
import hljs from "highlight.js/lib/highlight.js";
import "highlight.js/styles/darcula.css";

hljs.registerLanguage('bash', require("highlight.js/lib/languages/bash"));
hljs.registerLanguage('shell', require("highlight.js/lib/languages/shell"));
hljs.registerLanguage('json', require("highlight.js/lib/languages/json"));
hljs.registerLanguage('html', require("highlight.js/lib/languages/xml"));
hljs.registerLanguage('css', require("highlight.js/lib/languages/css"));
hljs.registerLanguage('javascript', require("highlight.js/lib/languages/javascript"));

export default {
    props: {
        lang: String
    },
    mounted: function(){
        hljs.highlightBlock(this.$el);
    },
    computed: {
        className(){
            return ["codeblock-container", this.lang || "plaintext"]
        }
    }
}
</script>