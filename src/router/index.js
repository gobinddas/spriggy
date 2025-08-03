
import { createRouter, createWebHistory } from 'vue-router';


import Home from '@/pages/Home.vue';
import OrderPage from '@/pages/OrderPage.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/order',
    name: 'OrderPage', 
    component: OrderPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
