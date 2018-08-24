import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import RsTbAside from '@/components/RsTbAside'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/test-block/*/:url',
      name: 'rs-tb-aside',
      component: RsTbAside,
      props: true
    },
    {
      path: '/test-block/:url',
      name: 'rs-tb-aside',
      component: RsTbAside,
      props: true
    }
  ]
})
