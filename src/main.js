import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import './assets/sass/wbtest-main.scss';
import router from './router';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');