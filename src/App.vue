<template>
	<div id="app">
		<div id="nav">
			<Navi />
			<router-view />
			<Footer
				:content="contentData"
			/>
		</div>
	</div>
</template>

<script>
import Navi from './components/Navi.vue';
import Footer from './components/Footer.vue';
import { methodMixin } from './methodMixin';
import datasource from './assets/sourcefile.json';

export default {
	name: 'WildbienenTest',
	components: {
		Navi,
		Footer
	},

	mixins: [methodMixin],

	data() {
		return {
			state: '',
			contentData: datasource
		};
	},

	// Watch route changes and set global state variable for dynamic content delivery to static components e.g. to footer
	watch: {
		$route(to) {
			this.state = to.name;
			console.log(this.state);
		}
	},

	mounted() {
		setTimeout(() => this.scrollFix(this.$route.hash), 1);
		this.state = this.$route.name;
		console.log(this.state);
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
