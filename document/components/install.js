import framework from "./framework/index.vue";
import page from "./page/index.vue";
import window from "./window/index.vue";
import document from "./document/index.vue";
import markdown from "./markdown/index.vue";
import codeblock from "./codeblock/index.vue";
import propertyblock from "./property/block.vue";
import propertyitem from "./property/item.vue";
import eventblock from "./event/block.vue";
import eventitem from "./event/item.vue";

export default function (Vue) {
    Vue.component("framework", framework);
    Vue.component("page", page);
    Vue.component("window", window);

    Vue.component("document", document);
    Vue.component("markdown", markdown);
    Vue.component("codeblock", codeblock);
    Vue.component("property-block", propertyblock);
    Vue.component("property-item", propertyitem);
    Vue.component("event-block", eventblock);
    Vue.component("event-item", eventitem);
}