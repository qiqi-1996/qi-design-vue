# Global Settings

## Defaults Value (settings.defaults)

Some attributes of components are set with default values, but these values may not suitable for all cases. Take the **mode** property of **Typography** components (title, text, etc.) as an example. These components (or the whole libraries) are designed for application development, so **single**(single line spacing) is used as the default value. But if your project is a blog-like application (mainly with a large number of articles and text segments), it is very troublesome to set the mode attribute every time you use the `<q-text></q-text>` component for multi-line text.

At this time, through the **Global Settings** function, you can customize the default value of **mode** to **normal** to reduce the frequency of manually setting this attribute.

```
import Vue from "vue";
import QiDesignVue, { settings } from "@qiqi1996/qi-design-vue";

settings.defaults.typography_mode = "normal";

Vue.use(QiDesignVue);
```

The list of default values ​​that can be set is as follows:

<property-block :general="false">
    <property-item
        name="typography_mode"
        definition="The default value of mode for all components under Typography. <br>If there is a separate setting for a single component, this value will be ignored."
        defaults="single"
        :values="['single', 'compact', 'normal']"
    ></property-item>
    <property-item
        name="title_mode"
        definition="The default value for mode of the Title component."
        defaults=""
        :values="['single', 'compact', 'normal']"
    ></property-item>
    <property-item
        name="text_mode"
        definition="The default value for mode of the Text component."
        defaults=""
        :values="['single', 'compact', 'normal']"
    ></property-item>
    <property-item
        name="footnote_mode"
        definition="The default value for mode of the Footnote component."
        defaults=""
        :values="['single', 'compact', 'normal']"
    ></property-item>
    <property-item
        name="quote_mode"
        definition="The default value for mode of the Quote component."
        defaults=""
        :values="['single', 'compact', 'normal']"
    ></property-item>
</property-block>