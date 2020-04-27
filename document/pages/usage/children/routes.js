export default [
    {
        name: "404",
        path: "404",
        component: ()=>import("./404/index.vue"),
    },
    {
        name: "badge",
        path: "badge",
        component: ()=>import("./badge/index.vue"),
    },
    {
        name: "button",
        path: "button",
        component: ()=>import("./button/index.vue"),
    },
    {
        name: "checkbox",
        path: "checkbox",
        component: ()=>import("./checkbox/index.vue"),
    },
    {
        name: "divider",
        path: "divider",
        component: ()=>import("./divider/index.vue"),
    },
    {
        name: "form-group",
        path: "form-group",
        component: ()=>import("./form-group/index.vue"),
    },
    {
        name: "icon",
        path: "icon",
        component: ()=>import("./icon/index.vue"),
    },
    {
        name: "input",
        path: "input",
        component: ()=>import("./input/index.vue"),
    },
    {
        name: "install",
        path: "install",
        component: ()=>import("./install/index.vue"),
    },
    {
        name: "panel",
        path: "panel",
        component: ()=>import("./panel/index.vue"),
    },
    {
        name: "progress",
        path: "progress",
        component: ()=>import("./progress/index.vue"),
    },
    {
        name: "radio",
        path: "radio",
        component: ()=>import("./radio/index.vue"),
    },
    {
        name: "switch",
        path: "switch",
        component: ()=>import("./switch/index.vue"),
    },
    {
        name: "tab",
        path: "tab",
        component: ()=>import("./tab/index.vue"),
    },
    {
        name: "theme",
        path: "theme",
        component: ()=>import("./theme/index.vue"),
    },
    {
        name: "tree",
        path: "tree",
        component: ()=>import("./tree/index.vue"),
    },
    {
        name: "typography",
        path: "typography",
        component: ()=>import("./typography/index.vue"),
    },
    {
        name: "404",
        path: "*",
        component: ()=>import("./404/index.vue"),
    },
]