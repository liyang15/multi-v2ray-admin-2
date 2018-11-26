import 'normalize.css';
import Vue from 'vue';
import elementui from 'element-ui';
import '@/assets/scss/elementui.scss';
import '@/assets/scss/nprogress.scss';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(elementui);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
