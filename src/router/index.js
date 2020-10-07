import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name: 'Home',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
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
]

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active"
})

export default router
