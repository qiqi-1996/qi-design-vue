export default [
    {
        name: "404",
        path: "/404",
        component: ()=>import("./404/index.vue"),
    },
    {
        name: "designer",
        path: "/designer",
        component: ()=>import("./designer/index.vue"),
        children: require("./designer/children/routes.js").default,
    },
    {
        name: "developer",
        path: "/developer",
        component: ()=>import("./developer/index.vue"),
        children: require("./developer/children/routes.js").default,
    },
    {
        name: "development",
        path: "/development",
        component: ()=>import("./development/index.vue"),
    },
    {
        name: "index",
        path: "/index",
        component: ()=>import("./index/index.vue"),
    },
    {
        name: "playground",
        path: "/playground",
        component: ()=>import("./playground/index.vue"),
    },
    {
        name: "playground2",
        path: "/playground2",
        component: ()=>import("./playground2/index.vue"),
    },
    {
        name: "resource",
        path: "/resource",
        component: ()=>import("./resource/index.vue"),
    },
    {
        name: "update",
        path: "/update",
        component: ()=>import("./update/index.vue"),
    },
    {
        name: "usage",
        path: "/usage",
        component: ()=>import("./usage/index.vue"),
        children: require("./usage/children/routes.js").default,
    },
    {
        name: "404",
        path: "*",
        component: ()=>import("./404/index.vue"),
    },
]