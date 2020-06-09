export default [
    {
        name: "202004",
        path: "202004",
        component: ()=>import(/* webpackChunkName: "202004" */"./202004/index.vue"),
    },
    {
        name: "202005",
        path: "202005",
        component: ()=>import(/* webpackChunkName: "202005" */"./202005/index.vue"),
    },
    {
        name: "202006",
        path: "202006",
        component: ()=>import(/* webpackChunkName: "202006" */"./202006/index.vue"),
    },
    {
        name: "404",
        path: "404",
        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),
    },
    {
        name: "404",
        path: "*",
        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),
    },
]