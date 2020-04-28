<i18n src="./i18n.json"></i18n>

<template>
    <document>
        <q-title :level="1" colorful>{{$t("title")}} <strong v-show="$i18n.locale!='en'">{{$t("id")}}</strong></q-title>

        <q-title :level="2">{{$t("common.usage.preview")}}</q-title>

        <window>
            <q-menu :data="menuData" :open="menuOpen" size="normal">
                <q-button @click="toggleMenuOpen">打开菜单</q-button>
            </q-menu>
        </window>

    </document>
</template>

<script>
export default {
    data(){
        return {
            menuOpen: false,
            menuData: [
                {
                    text: "Menu Item 1",
                    icon: "folder",
                    note: "⌘1",
                },
                {
                    text: "Menu Item 2",
                    children: [
                        {
                            text: "Submenu 1",
                            children: [
                                { text: "Submenu 1" },
                                { text: "Submenu 2" },
                                { text: "Submenu 3" },
                            ]
                        },
                        {
                            text: "Submenu 2",
                            children: [
                                { text: "Submenu 1" },
                                { text: "Submenu 2" },
                                { text: "Submenu 3" },
                            ]
                        },
                        {
                            text: "Submenu 3",
                            children: [
                                { text: "Submenu 1" },
                                { text: "Submenu 2" },
                                { 
                                    text: "Submenu 3",
                                    children: [
                                        { text: "Submenu 1" },
                                        { text: "Submenu 2" },
                                        { text: "Submenu 3" },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    text: "Menu Item 3"
                },
            ]
        }
    },
    methods: {
        toggleMenuOpen(){
            this.menuOpen = !this.menuOpen;
        }
    }
}
</script>