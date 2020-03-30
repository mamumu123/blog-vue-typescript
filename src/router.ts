import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import(/* webpackChunkName: "home" */ "./views/home.vue")
        },
        {
            path: "/articles",
            name: "articles",
            // route level code-splitting
            // this generates a separate chunk (articles.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "articles" */ "./views/articles.vue")
        },
        {
            path: "/login",
            name: "login",
            // route level code-splitting
            // this generates a separate chunk (articles.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "login" */ "./views/login.vue")
        }
        // {
        //     path: "*",
        //     redirect: {
        //         name: "home"
        //     }
        // }
    ]
});
