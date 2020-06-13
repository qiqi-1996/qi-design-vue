# Mask

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```html
&lt;q-mask name=&quot;fullscreen-mask&quot;&gt;
    &lt;p&gt;Click to close&lt;/p&gt;
&lt;/q-mask&gt;
&lt;!-- Fullscreen Mask --&gt;

&lt;q-mask name=&quot;wrap-mask&quot;&gt;
    &lt;p&gt;Click to close&lt;/p&gt;
    &lt;div style=&quot;width: 77px; height: 77px&quot; slot=&quot;wrap&quot;&gt;
        &lt;p&gt;Anything&lt;/p&gt;
    &lt;/div&gt;
&lt;/q-mask&gt;
&lt;!-- Wrap the mask of the div, Use scope-slot to indicate the wrapped element --&gt;
```

Use JS to open and close the mask

```
this.$qidesign.open("fullscreen-mask")
this.$qidesign.close("fullscreen-mask")
this.$qidesign.open("wrap-mask")
this.$qidesign.close("wrap-mask")
```

Use `v-model` to control the mask

```html
&lt;q-mask v-model=&quot;isOpen&quot;&gt;&lt;/q-mask&gt;
```

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="name"
        definition="Unique mask name"
        values="String"
    >
    </property-item>
    <property-item
        name="open"
        definition="Whether the mask is open (v-model)"
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="noclose"
        definition="Whether to disabled that close by click"
        defaults="false"
        values="Boolean"
    >
    </property-item>
</property-block>