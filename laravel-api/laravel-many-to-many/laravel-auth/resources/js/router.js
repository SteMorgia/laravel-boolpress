import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from './pages/HomePage.vue';
import BlogPost from './pages/BlogPost.vue';
import AboutUs from './pages/AboutUs.vue';



const router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            name:'home',
            component: HomePage
        },
        {
            path:'/blog',
            name:'blog',
            component: BlogPost
        },
        {
            path:'/about-us',
            name:'AboutUs',
            component: AboutUs
        }
    ]
});

export default router;