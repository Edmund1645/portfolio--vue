import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  easing: 'ease-out'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
