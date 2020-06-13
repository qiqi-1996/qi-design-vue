# Modal

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```html
&lt;q-modal name=&quot;mymodal&quot;&gt;
    &lt;!-- ... --&gt;
&lt;/q-modal&gt;
```

Use JS to open and close the modal

```
this.$qidesign.open("mymodal")
this.$qidesign.close("mymodal")
```

Use `v-model` to control the modal

```html
&lt;q-modal v-model=&quot;isOpen&quot;&gt;&lt;/q-modal&gt;
```

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="name"
        definition="Unique modal name"
        values="String"
    >
    </property-item>
    <property-item
        name="open"
        definition="Whether the modal is open (v-model)"
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="noclose"
        definition="Whether to disabled that close by click on the mask"
        defaults="false"
        values="Boolean"
    >
    </property-item>
</property-block>