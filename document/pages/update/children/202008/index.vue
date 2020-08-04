<template>
    <markdown :content="content" :renderer="renderer"></markdown>
</template>

<script>
import renderer from "../../updateMarkdownRenderer.js";

export default {
    data(){
        return {
            renderer, 
            content: ()=>import("./update.202008.md")
        }
    }
}
</script>