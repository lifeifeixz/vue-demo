// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './components/loading'
import a from './plugins/a'
import emComponent from './plugins/index'
import MessageBox from './components/messageBox/index'

Vue.config.productionTip = false
Vue.use(Loading)
Vue.use(a)
Vue.use(emComponent)
Vue.use(MessageBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
