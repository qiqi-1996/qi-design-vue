# 开关 <strong>Switch</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-switch&gt;&lt;/q-switch&gt;
&lt;!-- 关闭状态 --&gt;

&lt;q-switch :value=&quot;true&quot;&gt;&lt;/q-switch&gt;
&lt;!-- 打开状态 --&gt;

&lt;q-switch disable&gt;&lt;/q-switch&gt;
&lt;!-- 关闭且禁用状态 --&gt;

&lt;q-switch disable :value=&quot;true&quot;&gt;&lt;/q-switch&gt;
&lt;!-- 打开且禁用状态 --&gt;
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
        <q-switch size="small"></q-switch>
        <q-switch size="medium"></q-switch>
        <q-switch size="large"></q-switch>
    </property-item>
    <property-item
        name="value"
        definition="激活状态"
        defaults="false"
        values="Boolean"
    >
        <q-switch value></q-switch>
    </property-item>
    <property-item
        name="disable"
        definition="禁用状态"
        defaults="false"
        values="Boolean"
    >
        <q-switch disable></q-switch>
    </property-item>
</property-block>
