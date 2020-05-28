export default [
    {
        name: "404",
        path: "404",
        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),
    },
    {
        name: "avatar",
        path: "avatar",
        component: ()=>import(/* webpackChunkName: "avatar" */"./avatar/index.vue"),
    },
    {
        name: "badge",
        path: "badge",
        component: ()=>import(/* webpackChunkName: "badge" */"./badge/index.vue"),
    },
    {
        name: "button",
        path: "button",
        component: ()=>import(/* webpackChunkName: "button" */"./button/index.vue"),
    },
    {
        name: "checkbox",
        path: "checkbox",
        component: ()=>import(/* webpackChunkName: "checkbox" */"./checkbox/index.vue"),
    },
    {
        name: "collapse",
        path: "collapse",
        component: ()=>import(/* webpackChunkName: "collapse" */"./collapse/index.vue"),
    },
    {
        name: "divider",
        path: "divider",
        component: ()=>import(/* webpackChunkName: "divider" */"./divider/index.vue"),
    },
    {
        name: "form-group",
        path: "form-group",
        component: ()=>import(/* webpackChunkName: "form-group" */"./form-group/index.vue"),
    },
    {
        name: "icon",
        path: "icon",
        component: ()=>import(/* webpackChunkName: "icon" */"./icon/index.vue"),
    },
    {
        name: "image",
        path: "image",
        component: ()=>import(/* webpackChunkName: "image" */"./image/index.vue"),
    },
    {
        name: "input",
        path: "input",
        component: ()=>import(/* webpackChunkName: "input" */"./input/index.vue"),
    },
    {
        name: "install",
        path: "install",
        component: ()=>import(/* webpackChunkName: "install" */"./install/index.vue"),
    },
    {
        name: "mask",
        path: "mask",
        component: ()=>import(/* webpackChunkName: "mask" */"./mask/index.vue"),
    },
    {
        name: "menu",
        path: "menu",
        component: ()=>import(/* webpackChunkName: "menu" */"./menu/index.vue"),
    },
    {
        name: "panel",
        path: "panel",
        component: ()=>import(/* webpackChunkName: "panel" */"./panel/index.vue"),
    },
    {
        name: "popover",
        path: "popover",
        component: ()=>import(/* webpackChunkName: "popover" */"./popover/index.vue"),
    },
    {
        name: "progress",
        path: "progress",
        component: ()=>import(/* webpackChunkName: "progress" */"./progress/index.vue"),
    },
    {
        name: "radio",
        path: "radio",
        component: ()=>import(/* webpackChunkName: "radio" */"./radio/index.vue"),
    },
    {
        name: "settings",
        path: "settings",
        component: ()=>import(/* webpackChunkName: "settings" */"./settings/index.vue"),
    },
    {
        name: "switch",
        path: "switch",
        component: ()=>import(/* webpackChunkName: "switch" */"./switch/index.vue"),
    },
    {
        name: "tab",
        path: "tab",
        component: ()=>import(/* webpackChunkName: "tab" */"./tab/index.vue"),
    },
    {
        name: "theme",
        path: "theme",
        component: ()=>import(/* webpackChunkName: "theme" */"./theme/index.vue"),
    },
    {
        name: "toast",
        path: "toast",
        component: ()=>import(/* webpackChunkName: "toast" */"./toast/index.vue"),
    },
    {
        name: "tree",
        path: "tree",
        component: ()=>import(/* webpackChunkName: "tree" */"./tree/index.vue"),
    },
    {
        name: "typography",
        path: "typography",
        component: ()=>import(/* webpackChunkName: "typography" */"./typography/index.vue"),
    },
    {
        name: "404",
        path: "*",
        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),
    },
]