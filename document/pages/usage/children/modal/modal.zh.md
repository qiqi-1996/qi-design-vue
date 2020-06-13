# 模态窗 <strong>Modal</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```html
&lt;q-modal name=&quot;mymodal&quot;&gt;
    &lt;!-- ... --&gt;
&lt;/q-modal&gt;
```

使用 JS 打开和关闭遮罩

```
this.$qidesign.open("mymodal")
this.$qidesign.close("mymodal")
```

使用 v-model 控制遮罩

```html
&lt;q-modal v-model=&quot;isOpen&quot;&gt;&lt;/q-modal&gt;
```

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="name"
        definition="模态窗唯一名称"
        values="String"
    >
    </property-item>
    <property-item
        name="open"
        definition="模态窗是否打开（v-model）"
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="noclose"
        definition="是否禁止点击遮罩关闭"
        defaults="false"
        values="Boolean"
    >
    </property-item>
</property-block>