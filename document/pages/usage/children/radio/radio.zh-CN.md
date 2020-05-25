# 单选框 <strong>Radio</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-radio value=&quot;1&quot; v-model=&quot;radio&quot; default&gt;Radio 1&lt;/q-radio&gt;
&lt;q-radio value=&quot;2&quot; v-model=&quot;radio&quot;&gt;Radio 2&lt;/q-radio&gt;
&lt;q-radio value=&quot;3&quot; v-model=&quot;radio&quot;&gt;Radio 3&lt;/q-radio&gt;
&lt;q-radio value=&quot;4&quot; v-model=&quot;radio&quot; disable&gt;Radio 4&lt;/q-radio&gt;
```
通过 <strong>v-model</strong> 绑定至同一个变量，并提供 <strong>value</strong> 作为选中的值，即可实现单选的效果。

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="default"
        definition="默认选中"
        defaults="false"
        values="Boolean"
    >
        <q-radio default>默认选中</q-radio>
    </property-item>
    <property-item
        name="disable"
        definition="禁用状态"
        defaults="false"
        values="Boolean"
    >
        <q-radio disable>禁用</q-radio>
    </property-item>
    <property-item
        name="value"
        definition="选项值"
        defaults=""
        values="Any"
        required
    >
    </property-item>
</property-block>

## {{ $t("common.usage.event") }}

<event-block>
    <event-item
        name="change"
        definition="状态改变"
        :values="['Boolean - 是否选中']"
    ></event-item>
</event-block>