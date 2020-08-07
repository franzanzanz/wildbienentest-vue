import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		cookieChoice: false,
		allCookies: false,
		scoreTestpartOne: null,
		scoreTestpartTwo: null,
		scoreTestpartThree: null,
 	},
	mutations: {
		cookieChoiceDone (state) {
			state.cookieChoice = true;
		},
		cookieChoice (state, val) {
			state.allCookies = val;
		}
	},
	actions: {

	},
	getters: {

	}
});