import Vue from "vue";
import Router from "vue-router";

const EntryLayout = () => import(/* webpackChunkName: "site" */ "./layouts/EntryLayout.vue")
const HomeLayout = () => import(/* webpackChunkName: "site" */ "./layouts/HomeLayout.vue")
const ArticleDetail = () => import(/* webpackChunkName: "site" */ "./views/ArticleDetail.vue")
const HomeArticles = () => import(/* webpackChunkName: "site" */ "./views/HomeArticles.vue")
const LoginLayout = () => import(/* webpackChunkName: "admin" */ "./layouts/LoginLayout.vue")
const AdminLayout = () => import(/* webpackChunkName: "admin" */ "./layouts/AdminLayout.vue")
const AdminBlog = () => import(/* webpackChunkName: "site" */ "./views/AdminBlog.vue")

export const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "entry",
            component: EntryLayout
        },
        {
            path: "/home",
            name: "home",
            component: HomeLayout,
            children: [{
                path: "articleDetail",
                name: "articleDetail",
                component: ArticleDetail
            },
            {
                path: "/",
                name: "articles",
                component: HomeArticles
            }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: LoginLayout
        },
        {
            path: "/admin",
            name: "admin",
            component: AdminLayout,
            meta: {
                auth: true   // 用于判断当前路由是否需要登陆
            },
            children: [{
                path: "/",
                name: "adminBlog",
                component: AdminBlog,
                meta: {
                    auth: true   // 用于判断当前路由是否需要登陆
                },
            }]
        }
    ]
});

Vue.use(Router);
// 路由拦截，如果没有登陆，则跳回到登录页面
router.beforeEach(({
    meta,
    path
}, from, next) => {
    const { auth } = meta;
    const isLogin = localStorage.getItem("authorization");
    if (auth && !isLogin && path !== '/login') {
        return next({
            path: '/login'
        });
    }
    next();
});