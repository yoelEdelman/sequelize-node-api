import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'

import Snotify from 'vue-snotify'; // 1. Import Snotify
import 'vue-snotify/styles/material.css'; // or dark.css or simple.css

Vue.use(Snotify)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
