# 全局设置

## 默认值（settings.defaults）

一些组件的属性是设有默认值的，但是这些值并一定在所有情况下都适用。以 **Typography** 系的组件（title、text 等）的 **mode** 属性为例，这些组件（或组件库整体）是以应用开发为目标而设计的，因此使用了 **single** 作为默认值。但是如果你的项目是一个类似博客（以大量文章和文本段为主）的应用，对于多行文本每次使用 q-text 组件时，都要设置 mode 属性，这样非常麻烦。

此时，通过 **全局设置** 功能，你可以自定义 **mode** 的默认值为 **normal** 来减少手动设置该属性的频率。

```
import Vue from "vue";
import QiDesignVue, { settings } from "@qiqi1996/qi-design-vue";

settings.defaults.typography_mode = "normal";

Vue.use(QiDesignVue);
```

可设置的默认值列表如下

<property-block :general="false">
    <property-item
        name="typography_mode"
        definition="Typography 系下的所有组件的 mode 默认值。<br>如果有针对单个组件的单独设置，则忽略此默认值。"
        defaults="single"
        :values="['single', 'compact', 'normal']"
    ></property-item>
    <property-item
        name="title_mode"
        definition="Title 组件的 mode 默认值"
        defaults=""
        :values="['single', 'compact', 'normal']"
    ></property-item>
    <property-item
        name="text_mode"
        definition="Text 组件的 mode 默认值"
        defaults=""
        :values="['single', 'compact', 'normal']"
    ></property-item>
    <property-item
        name="footnote_mode"
        definition="Footnote 组件的 mode 默认值"
        defaults=""
        :values="['single', 'compact', 'normal']"
    ></property-item>
    <property-item
        name="quote_mode"
        definition="Quote 组件的 mode 默认值"
        defaults=""
        :values="['single', 'compact', 'normal']"
    ></property-item>
</property-block>