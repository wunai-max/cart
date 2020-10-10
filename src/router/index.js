import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
    redirect: "/home/all",
    children: [
      {
        path: 'all',
        name: 'All',
        component: () => import('../views/home/all/index.vue')
      },
      {
        path: 'fruits',
        name: 'Fruits',
        component: () => import('../views/home/fruits/index.vue')
      },
      {
        path: 'meat',
        name: 'Meat',
        component: () => import('../views/home/meat/index.vue')
      },
      {
        path: 'quick',
        name: 'Quick',
        component: () => import('../views/home/quick/index.vue')
      },
      {
        path: 'vegetables',
        name: 'Vegetables',
        component: () => import('../views/home/vegetables/index.vue')
      },
      ]
    
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/index.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop/index.vue')
  },
  {
    path: '/site',
    name: 'site',
    component: () => import('../views/site/index.vue')
  },
  {
    path: '/compile',
    name: 'compile',
    component: () => import('../views/compile/index.vue')
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import('../views/buy/index.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active"
})

export default router
