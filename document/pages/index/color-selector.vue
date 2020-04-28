<template>
    <div class="color-selector-container">
        <q-color-block :size="80" round :color="colorname">
            <q-image :src="require('./'+colorname+'.png')" width="72px"></q-image>
        </q-color-block>
        <q-title :level="4" mode="single">{{colorname | toName}}</q-title>
        <q-footnote mode="single">{{colorname | toDescription}}</q-footnote>
        <q-button :type="actived?'primary':'default'" @click="handleClick">{{actived?'已启用':'启用'}}</q-button>
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.color-selector-container {
    display: inline-block;
    text-align: center;
}

.q-image {
    border-radius: 50px;
    margin: 1px;
    border: @grid/2 - 1px solid @color-white;
}

.q-title {
    margin-top: 2*@grid;
    margin-bottom: @grid;
}

.q-button {
    margin-top: 2*@grid;
}
</style>

<script>

const NameDict = {
    "poe": "爱伦坡",
    "starrynight": "星月夜",
    "sunflower": "向日葵",
    "enjolras": "安灼拉",
    "spring": "春天",
}

const DescriptionDict = {
    "poe": "《永不复还》",
    "starrynight": "梵高",
    "sunflower": "梵高",
    "enjolras": "《悲惨世界》",
    "spring": "莫奈",
}

export default {
    props: {
        colorname: String,
        activedname: String
    },
    computed: {
        actived(){
            return this.colorname === this.activedname;
        }
    },
    methods: {
        handleClick(){
            this.$emit("change", this.colorname);
        }
    },
    filters: {
        toName(value){
            return NameDict[value];
        },
        toDescription(value){
            return DescriptionDict[value];
        },
    }
}
</script>