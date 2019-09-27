import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/tabs',
      name: 'tabs',
      redirect: '/home',
      component: () => import('@/views/Tabs.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
        },
        {
          path: '/list',
          name: 'list',
          component: () => import('@/views/List.vue')
        }
      ]
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  const path = to.name
  const pathArr = ['home', 'about']
  if (pathArr.includes(path)) {
    store.commit('increment')
  } else {
    store.commit('incrementOn')
  }
  next()
})
