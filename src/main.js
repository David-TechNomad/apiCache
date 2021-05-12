import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/common/css/normalize.css';
import '@/common/css/common.scss';
import './mock/list1';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
