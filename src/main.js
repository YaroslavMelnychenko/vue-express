import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var Root = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

window.App = Root.$children[0];