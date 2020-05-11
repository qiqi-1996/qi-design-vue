export default [
    {
        name: "404",
        path: "404",
        component: ()=>import("./404/index.vue"),
    },
    {
        name: "construction",
        path: "construction",
        component: ()=>import("./construction/index.vue"),
    },
    {
        name: "document-standard",
        path: "document-standard",
        component: ()=>import("./document-standard/index.vue"),
    },
    {
        name: "summary",
        path: "summary",
        component: ()=>import("./summary/index.vue"),
    },
    {
        name: "404",
        path: "*",
        component: ()=>import("./404/index.vue"),
    },
]