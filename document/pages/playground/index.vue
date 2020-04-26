<template>
    <div class="page">
        <div class="block">
            <q-theme theme="light">
                <components></components>
            </q-theme>
        </div>
        <div class="block">
            <q-theme theme="light" color="enjolras">
                <components></components>
            </q-theme>
        </div>
        <div class="block dark">
            <q-theme theme="dark">
                <components></components>
            </q-theme>
        </div>
        <div class="block dark">
            <q-theme theme="dark" color="enjolras">
                <components></components>
            </q-theme>
        </div>
    </div>
</template>

<style lang="less" scoped>
.page {
    width: 100%;
    height: 100%;
}

.block {
    width: 25%;
    height: 100%;
    float: left;
}

.dark {
    background: #000;
}

.q-theme {
    display: block;
    margin: 16px;
}

</style>

<script>
import components from "./components.vue";
export default {
    components: {
        components
    }
}
</script>