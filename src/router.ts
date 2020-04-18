import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "entry",
            component: () => import(/* webpackChunkName: "site" */ "./layouts/EntryLayout.vue")
        },
        {
            path: "/home",
            name: "home",
            component: () => import(/* webpackChunkName: "site" */ "./layouts/HomeLayout.vue"),
            children: [{
                path: "articleDetail",
                name: "articleDetail",
                component: () =>
                    import(/* webpackChunkName: "site" */ "./views/ArticleDetail.vue")
            },
            {
                path: "/",
                name: "articles",
                component: () =>
                    import(/* webpackChunkName: "site" */ "./views/HomeArticles.vue")
            }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import(/* webpackChunkName: "admin" */ "./layouts/LoginLayout.vue")
        },
        {
            path: "/admin",
            name: "admin",
            component: () =>
                import(/* webpackChunkName: "admin" */ "./layouts/AdminLayout.vue"),
            children: [{
                path: "/",
                name: "adminBlog",
                component: () =>
                    import(/* webpackChunkName: "site" */ "./views/AdminBlog.vue")
            }]
        }
    ]
});
