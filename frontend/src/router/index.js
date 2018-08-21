import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import RedstopApi from '@/components/RedstopApi/RedstopApi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/redstop-api',
      name: 'RedstopAPi',
      component: RedstopApi
    }
  ]
})
