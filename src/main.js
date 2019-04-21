import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import checkView from 'vue-check-view'
import "./styles/main.scss"

window._ = require('lodash');
Vue.config.productionTip = false;
Vue.use(checkView);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
