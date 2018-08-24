import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import RsTb from '@/components/RsTb'
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
      path: '/test-block',
      name: 'rs-tb',
      component: RsTb,
      children: [
        {
          path: ':url',
          name: 'rs-tb2_singleurl',
          component: RsTbAside,
          props: true
        }
      ]
    }
  ]
})
