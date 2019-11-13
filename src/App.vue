<template>
	<div id="app">
		<div id="nav">
			<Navi />
			<router-view />
			<Footer />
		</div>
	</div>
</template>

<script>
import Navi from './components/Navi.vue';
import Footer from './components/Footer.vue';
import { methodMixin } from './methodMixin';

export default {
	name: 'WildbienenTest',
	components: {
		Navi,
		Footer
	},

	mixins: [methodMixin],

	data() {
		return {
			twitterPosts: [],
			twitterErrors: [],
			state: 'start'
		};
	},

	mounted() {
		setTimeout(() => this.scrollFix(this.$route.hash), 1);
	},

	methods: {
		showImprint() {
			console.log('imprint');
			this.state = 'imprint';
		},
		showSurvey() {
			this.state = 'survey';
		},
		showStart() {
			this.state = 'start';
		}
	}
};
</script>

<style lang="scss">

#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // margin-top: 60px;
}
</style>
