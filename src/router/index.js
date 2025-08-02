// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import pages
import Home from '@/pages/Home.vue';
import Order from '@/pages/Order.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
