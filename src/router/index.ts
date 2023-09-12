import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',

  routes: [
    {
      path: '/',
      component: () => import('../pages/PageIndex/PageIndex.vue'),
      name: 'Index',
    },
  ],
});
