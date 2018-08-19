// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App2 from './App2'
import RedstopHeader from './RedstopHeader'
import router from './router'
import './assets/css/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#app2',
  router,
  components: { App2 },
  template: '<App2/>'
})

new Vue({
  el: '#redstop-header',
  router,
  components: { RedstopHeader },
  template: '<RedstopHeader/>'
})
