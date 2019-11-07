import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Survey from './views/Survey.vue';
import Imprint from './views/Imprint.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/survey',
			name: 'survey',
			component: Survey
		},
		{
			path: '/imprint',
			name: 'imprint',
			component: Imprint
		},
	]
});
