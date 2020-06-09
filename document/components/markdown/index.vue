<template>
    <document>
        <q-icon name="loading" animation="rotate" v-show="loading"></q-icon>
        <div class="content" v-if="rendered">
            <compontent :is="contentComponent"></compontent>
        </div>
    </document>
</template>

<script>
import Vue from "vue";
import marked from "marked";
import store from "document/store.js";

const MarkdownRenderer = {
    heading(text, level) {
        if(level===1){
            return `<q-title :level="${level}" colorful>${text}</q-title>`;
        }
        return `<q-title :level="${level}">${text}</q-title>`;
    },
    paragraph(text) {
        return `<q-text>${text}</q-text>`;
    },
    blockquote(quote) {
        return `<q-quote block>${quote}</q-quote>`
    },
    hr(){
       return `<q-divider></q-divider>` 
    },
    code(code, infostring) {
        return `<codeblock lang="${infostring}">${code}</codeblock>`
    }
};

export default {
    props: {
        content: {},
        i18n: Object,
        components: Object,
        renderer: Object
    },
    data() {
        return {
            loading: false,
            rendered: false,
            contentComponent: { render() {} }
        };
    },
    async mounted() {
        if(this.content){
            let content = this.content;
            if(typeof content == "function"){
                this.loading = true;
                content = (await content()).default;
                this.loading = false;
            }else if(typeof content != "string"){
                // TODO: Display error
                return;
            }
            this.renderContent(content);
            return;
        }

        this.$watch(()=>store.i18n.locale, async (newLocale)=>{
            let availableLocales = Object.keys(this.$props.i18n);
            let locale = (availableLocales.indexOf(newLocale) === -1)?availableLocales[0]:newLocale;
            let content = this.$props.i18n[locale];

            if(typeof content === "function"){
                this.loading = true;
                content = (await content()).default;
                this.loading = false;
            }

            this.renderContent(content);

        }, { immediate: true });
    },
    methods: {
        renderContent(content) {
            marked.use({ renderer: this.renderer || MarkdownRenderer });
            this.rendered = false;
            this.contentComponent = Vue.compile(
                "<div>" + marked(content) + "</div>"
            );
            this.contentComponent.components = this.components;
            this.$nextTick(() => {
                this.rendered = true;
            });
        }
    }
};
</script>