import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
  },
  {
    path: '/shops',
    name: 'Shops',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopsView.vue'),
  },
  { path: '/shops/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopView.vue'),
  },
  { path: '/dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
  },
  { path: '/dashboard/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
