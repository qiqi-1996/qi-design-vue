export default [
    {
        name: "404",
        path: "404",
        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),
    },
    {
        name: "construction",
        path: "construction",
        component: ()=>import(/* webpackChunkName: "construction" */"./construction/index.vue"),
    },
    {
        name: "document-standard",
        path: "document-standard",
        component: ()=>import(/* webpackChunkName: "document-standard" */"./document-standard/index.vue"),
    },
    {
        name: "summary",
        path: "summary",
        component: ()=>import(/* webpackChunkName: "summary" */"./summary/index.vue"),
    },
    {
        name: "404",
        path: "*",
        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),
    },
]