import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import './assets/sass/wbtest-main.scss';
import router from './router';
import store from './store';
import twitter from 'vue-twitter';
import rellax from 'rellax';

Object.defineProperty(Vue.prototype, '$rellax', {value: rellax});

Vue.use(BootstrapVue);
Vue.use(twitter);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');