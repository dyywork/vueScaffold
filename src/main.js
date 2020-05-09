import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import VConsole from 'vconsole'
import { mergeBeforeEachHook, VKeepAliveChain } from 'v-keep-alive-chain'
var va = new VConsole()
Vue.use(VKeepAliveChain, {
  key: 'cacheTo', // 可选的 默认为cacheTo
})
router.beforeEach(mergeBeforeEachHook())

router.beforeEach(mergeBeforeEachHook((to, from, next) => {
  next()
}))

Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
