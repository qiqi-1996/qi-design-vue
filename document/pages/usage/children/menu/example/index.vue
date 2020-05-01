<i18n src="./i18n.json"></i18n>
<template>
    <window :title="$t('title')" style="width:500px;" source="menu">
        <q-menu :data="menuFile" v-model="menuOpen" value="file" size="small" @select="handleMenuSelected">
            <q-hover class="menu-item" :hover="hover" @click="doMenuOpen('file')" @mouseenter.native="switchMenuOpen('file')">{{ $t("menu-file") }}</q-hover>
        </q-menu>
        <q-menu :data="menuEdit" v-model="menuOpen" value="edit" size="small" @select="handleMenuSelected">
            <q-hover class="menu-item" :hover="hover" @click="doMenuOpen('edit')" @mouseenter.native="switchMenuOpen('edit')">{{ $t("menu-edit") }}</q-hover>
        </q-menu>
        <q-menu :data="menuHelp" v-model="menuOpen" value="help" size="small" @select="handleMenuSelected">
            <q-hover class="menu-item" :hover="hover" @click="doMenuOpen('help')" @mouseenter.native="switchMenuOpen('help')">{{ $t("menu-help") }}</q-hover>
        </q-menu>
        <q-divider style="width: calc(100% + 32px); margin-left: -16px;"></q-divider>

        <div class="workspace" :style="workspaceStyle">
            <q-title :level="1">Hello :)</q-title>
            <q-text class="description">{{ $t("description") }}</q-text>

            <div class="more-example">
                <q-menu :data="menuTest" v-model="menuOpenButton">
                    <q-button icon="down" @click="toggle('menuOpenButton')">Button</q-button>
                </q-menu>

                <q-menu :data="menuTest" v-model="menuOpenSwitch">
                    <q-switch icon="down" v-model="menuOpenSwitch"></q-switch>
                </q-menu>
            </div>
        </div>
    </window>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    .menu-item {
        display: inline-block;
        padding: @grid 2*@grid;
        font-size: 12px;
        cursor: default;
    }

    .q-menu {
        display: inline-block;
    }

    .more-example * {
        display: inline-block;
        vertical-align: middle;
        margin-right: @grid;
    }

    .workspace {
        .transition();

        .description {
            margin: 4*@grid 0px;
        }
    }
}
</style>

<script>
import store from "document/store.js";

const QHoverHover = {
    border: "none"
}

export default {
    watch: {
        "store.i18n.locale": {
            handler(){
                this.resetMenuContent();
            }
        }
    },
    data(){
        return {
            store,
            hover: QHoverHover,
            menuOpen: "",
            menuOpenButton: false,
            menuOpenSwitch: false,

            menuFile: [],
            menuEdit: [],
            menuHelp: [],
            menuTest: [
                { text: "Menu Item 1", icon: "document" },
                { text: "Menu Item 2", icon: "folder", children: [
                    { text: "Submenu Item 1" },
                    { text: "Submenu Item 2" },
                    { text: "Submenu Item 3" },
                ]},
                { text: "Menu Item 3", icon: "document" },
            ]
        }
    },
    computed: {
        workspaceStyle(){
            if(this.menuOpen){
                return {
                    opacity: 0.25,
                    pointerEvents: "none",
                    // filter: "blur(2px)"
                }
            }else{
                return {}
            }
        }
    },
    methods: {
        resetMenuContent(){
            // 使 i18n 内容得以在对象中更新
            var button = {
                render(){
                    return(
                        <q-button type="primary" style="margin: 8px">Test Button</q-button>
                    )
                }
            }

            this.menuFile = [
                {
                    text: this.$t("menu-file-new"),
                    icon: "document",
                    note: "Ctrl + N",
                },
                {
                    text: this.$t("menu-file-open"),
                    note: "Ctrl + O",
                },
                {
                    text: this.$t("menu-file-openrecent"),
                    note: "3",
                    children: [
                        { text: "index.vue" },
                        { text: "button.vue" },
                        { is: "q-divider" },
                        { icon: "trash", text: this.$t("menu-file-openrecent-clear") }
                    ]
                },
                {
                    is: "q-divider"
                },
                {
                    text: this.$t("menu-file-exit")
                }
            ];

            this.menuEdit = [
                {
                    text: this.$t("menu-edit-undo"),
                    note: "Ctrl + Z"
                },
                {
                    text: this.$t("menu-edit-redo"),
                    note: "Ctrl + Y"
                },
                { is: "q-divider" },
                {
                    text: this.$t("menu-edit-copy"),
                    note: "Ctrl + C"
                },
                {
                    text: this.$t("menu-edit-cut"),
                    note: "Ctrl + X"
                },
                {
                    text: this.$t("menu-edit-paste"),
                    note: "Ctrl + V"
                },
            ]

            this.menuHelp = [
                {
                    is: button
                }
            ];
        },
        doMenuOpen(id){
            this.resetMenuContent();
            if(this.menuOpen === id){
                this.menuOpen = "";
            }else{
                this.menuOpen = id;
            }
            this.menuOpenButton = false;
            this.menuOpenSwitch = false;
        },
        switchMenuOpen(id){
            if(this.menuOpen){
                this.menuOpen = id;
            }
        },
        toggle(key){
            this.$set(this, key, !this[key]);
        },
        handleMenuSelected(evt){
            console.log(evt);
        }
    }
}
</script>