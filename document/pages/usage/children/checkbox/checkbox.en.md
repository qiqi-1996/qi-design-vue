# Checkbox

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

The use of the check box is slightly different from the radio box, and it needs to wrap an outer component <strong>q-form-group to</strong> receive the multi-selected value.

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="default"
        definition="Selected by default"
        defaults="false"
        values="Boolean"
    >
        <q-checkbox default>Selected by default</q-checkbox>
    </property-item>
    <property-item
        name="disable"
        definition="Disabled"
        defaults="false"
        values="Boolean"
    >
        <q-checkbox disable>Disabled</q-checkbox>
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

## Checkbox {{$t("common.usage.events")}}

<event-block>
    <event-item
        name="change"
        definition="State changed"
        :values="['Boolean - Whether selected']"
    ></event-item>
</event-block>

## Form Group {{$t("common.usage.events")}}

The following is specific for the Form Group of the Checkbox component. At this time, the Form Group will set the data type managed by itself to <strong>Set</strong>, but it will be processed into a normal array when callback.

<event-block>
    <event-item
        name="change"
        definition="State changed"
        :values="['Array - The value of all selected Checkboxes']"
    ></event-item>
</event-block>

