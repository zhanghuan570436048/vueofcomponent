// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.prototype.jquery = $

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
