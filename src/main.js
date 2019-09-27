import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'

Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
