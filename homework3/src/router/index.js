import { createRouter, createWebHashHistory } from 'vue-router'

import childOne from '@/components/ChildOne.vue';
import childTwo from '@/components/ChildTwo.vue';
import LoginComponent from '@/components/LoginComponent.vue';
const routes = [
  {
    path:'/1',
    component:childOne
  },
    {
        path: '/2',
        component: childTwo
    },
    {
        path: '/login',
        component: LoginComponent
    }
]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (to.path !== '/login' && !isLoggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;

