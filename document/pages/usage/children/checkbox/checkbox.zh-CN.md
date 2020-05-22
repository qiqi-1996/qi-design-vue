# 复选框 <strong>Checkbox</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-form-group v-model=&quot;checkbox&quot;&gt;
    &lt;q-checkbox value=&quot;A&quot; default&gt;Checkbox A&lt;/q-checkbox&gt;
    &lt;q-checkbox value=&quot;B&quot;&gt;Checkbox B&lt;/q-checkbox&gt;
    &lt;q-checkbox value=&quot;C&quot;&gt;Checkbox C&lt;/q-checkbox&gt;
    &lt;q-checkbox value=&quot;D&quot; disable&gt;Checkbox D&lt;/q-checkbox&gt;
&lt;/q-form-group&gt;
```

复选框的使用与单选框略有不同，需要包裹一个外层组件 <strong>q-form-group</strong> 来接收多选的值。

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="default"
        definition="默认选中"
        defaults="false"
        values="Boolean"
    >
        <q-checkbox default>默认选中</q-checkbox>
    </property-item>
    <property-item
        name="disable"
        definition="禁用状态"
        defaults="false"
        values="Boolean"
    >
        <q-checkbox disable>禁用</q-checkbox>
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

## Checkbox {{$t("common.usage.events")}}

<event-block>
    <event-item
        name="change"
        definition="状态改变"
        :values="['Boolean - 是否选中']"
    ></event-item>
</event-block>

## Form Group {{$t("common.usage.events")}}

<q-text>以下为针对 Checkbox 组件 Form Group 的特定事件文档，此时 Form Group 会将自身管理的数据类型设置为 <strong>Set</strong>，但是回调时会处理成普通数组。</q-text>

<event-block>
    <event-item
        name="change"
        definition="状态改变"
        :values="['Array - 所有选中的 Checkbox 的 value 值']"
    ></event-item>
</event-block>

