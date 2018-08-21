// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import RedstopHeader from './components/RsHeader'
import TreeView from './components/TreeView'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#redstopHeader',
  router,
  components: { RedstopHeader },
  template: '<RedstopHeader/>'
})

new Vue({
  el: '#treeview',
  router,
  components: { TreeView },
  template: '<TreeView/>'
})
