<template>
    <q-panel>
        <q-button type="primary">Button - Primary</q-button>
        <q-button>Button - Default</q-button>
        <q-button type="primary" disable>Button - Primary - Disable</q-button>
        <q-button disable> Button - Default - Disable</q-button>
        <q-button type="primary" round>Button - Primary - Round</q-button>
        <q-button round> Button - Default - Round</q-button>

        <q-divider></q-divider>

        <q-switch></q-switch>
        <q-switch disable></q-switch>
        <q-switch :value="true" disable></q-switch>

        <q-divider></q-divider>

        <q-select placeholder="请选择...">
            <q-select-item value="1" text="A"></q-select-item>
            <q-select-item value="2" text="B"></q-select-item>
            <q-select-item value="3" text="C"></q-select-item>
            <q-select-item value="3" text="D"></q-select-item>
            <q-select-item value="4" text="E"></q-select-item>
            <q-select-item value="5" text="F"></q-select-item>
            <q-select-item value="6" text="G"></q-select-item>
            <q-select-item value="7" text="H"></q-select-item>
        </q-select>
        <q-select disable></q-select>

        <q-divider></q-divider>

        <q-tab>
            <q-tab-item value="1">Tab 1</q-tab-item>
            <q-tab-item value="2">Tab 22</q-tab-item>
            <q-tab-item value="3">Tab 333</q-tab-item>
            <q-tab-item value="4">Tab 4444</q-tab-item>
            <q-tab-item value="5" disable>Tab 55555</q-tab-item>
        </q-tab>

        <q-tab size="small" style="margin-top: 16px;">
            <q-tab-item value="1">Tab 1</q-tab-item>
            <q-tab-item value="2">Tab 2</q-tab-item>
            <q-tab-item value="3" disable>Tab 3</q-tab-item>
        </q-tab>

        <q-divider></q-divider>

        <q-form>
            <q-radio value="1" active>单选框 1</q-radio>
            <q-radio value="2">单选框 2</q-radio>
            <q-radio value="3">单选框 3</q-radio>
        </q-form>

    </q-panel>
</template>

<style lang="less" scoped>
.q-divider {
    margin: 32px 0px;
}
</style>