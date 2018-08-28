import Vue from 'vue'
import Router from 'vue-router'
import RsBoard from '@/components/RsBoard'
import RsTb from '@/components/RsTb'
import RsTbAside from '@/components/RsTbAside'
import RsMr from '@/components/RsMr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rs-board',
      component: RsBoard
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
