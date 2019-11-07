import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import './assets/sass/wbtest-main.scss';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
