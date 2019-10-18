import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Argon from '@/plugins/argon-kit'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css'
import Snotify, { SnotifyPosition } from 'vue-snotify'

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Snotify, options)


Vue.use(Loading);
Vue.use(BootstrapVue)
Vue.use(Argon);

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
    NProgress.done()
})
new Vue({
  NProgress,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
