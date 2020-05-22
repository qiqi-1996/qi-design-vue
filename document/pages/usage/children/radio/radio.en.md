# Radio

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-radio value=&quot;1&quot; v-model=&quot;radio&quot; default&gt;Radio 1&lt;/q-radio&gt;
&lt;q-radio value=&quot;2&quot; v-model=&quot;radio&quot;&gt;Radio 2&lt;/q-radio&gt;
&lt;q-radio value=&quot;3&quot; v-model=&quot;radio&quot;&gt;Radio 3&lt;/q-radio&gt;
&lt;q-radio value=&quot;4&quot; v-model=&quot;radio&quot; disable&gt;Radio 4&lt;/q-radio&gt;
```

By binding to the same variable through <strong>v-model</strong> and providing the property of <strong>value</strong> as the selected value, you can achieve the effect of single selection.

## {{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="default"
        definition="Selected by default"
        defaults="false"
        values="Boolean"
    >
        <q-radio default>Selected by default</q-radio>
    </property-item>
    <property-item
        name="disable"
        definition="Disabled state"
        defaults="false"
        values="Boolean"
    >
        <q-radio disable>Disable</q-radio>
    </property-item>
    <property-item
        name="value"
        definition="Value"
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
        definition="State change"
        :values="['Boolean - Whether selected']"
    ></event-item>
</event-block>