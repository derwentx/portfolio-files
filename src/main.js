// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
import VueAnalytics from 'vue-analytics'

require('bootstrap')
require('jquery.easing')

require('./assets/resume.css')
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/devicons/css/devicons.css')
require('../node_modules/devicon-2.2/devicon.css')
require('../node_modules/font-awesome/css/font-awesome.css')

Vue.prototype.jquery = jquery
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-56330781-2',
  checkDuplicatedScript: true,
  autoTracking: {
    screenview: true
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
