import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/Services.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Contact.vue'),
      beforeEnter (route, redirect, next) {
        let confirm = window.confirm('Are you sure?')
        if (confirm) {
          next()
        }
      },
      children: [
        {
          path: 'pagea',
          name: 'pagea',
          component: () => import('../components/PageA.vue')
        },
        {
          path: 'pageb',
          name: 'pageb',
          component: () => import('../components/PageB.vue')
        }
      ]
    },
    {
      path: '/post/:id(\\d+)',
      name: 'post',
      component: () => import('../components/SinglePost.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
