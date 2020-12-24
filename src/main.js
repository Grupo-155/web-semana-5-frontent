import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store';
import axios from 'axios'




const base = axios.create({
  //baseURL:'https://thawing-hollows-65098.herokuapp.com'
  baseURL:'https://thawing-hollows-65098.herokuapp.com'
});

Vue.prototype.$http = base;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
