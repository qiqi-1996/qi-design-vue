# 输入框 <strong>Input</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-input size=&quot;small&quot; placeholder=&quot;小号输入框&quot;&gt;&lt;/q-input&gt;
&lt;q-input size=&quot;small&quot; placeholder=&quot;小号输入框带图标&quot; icon=&quot;folder&quot;&gt;&lt;/q-input&gt;
&lt;q-input placeholder=&quot;输入框&quot;&gt;&lt;/q-input&gt;
&lt;q-input placeholder=&quot;带图标输入框&quot; icon=&quot;folder&quot;&gt;&lt;/q-input&gt;
```

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="size"
        definition="组件尺寸"
        defaults="medium"
        :values="['small', 'medium', 'large']"
    >
        <q-input size="small"></q-input>
        <q-input size="medium"></q-input>
        <q-input size="large"></q-input>
    </property-item>
    <property-item
        name="type"
        definition="类型"
        defaults="text"
        values="HTML 常规属性"
    >
        <q-input type="password" value="password"></q-input>
    </property-item>
    <property-item
        name="icon"
        definition="前缀图标"
        values="详见 Icon 组件"
    >
        <q-input icon="image"></q-input>
    </property-item>
    <property-item
        name="placeholder"
        definition="占位文本"
        values="String"
    >
        <q-input placeholder="placeholder"></q-input>
    </property-item>
    <property-item
        name="value"
        definition="输入内容（v-model）"
        values="String"
    >
        <q-input value="123"></q-input>
    </property-item>
    <property-item
        name="disable"
        definition="禁用状态"
        defaults="false"
        values="Boolean"
    >
        <q-input placeholder="禁用状态" disable></q-input>
    </property-item>
</property-block>