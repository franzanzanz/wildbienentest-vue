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
			contentData: datasource,
			cookiemodalVisible: true,
			allCookies: ''
		};
	},

	computed: {
	},

	// Watch route changes and set global state variable for dynamic content delivery to static components e.g. to footer
	watch: {
		$route(to) {
			this.state = to.name;
			console.log(this.state);
		},
		allCookies: function () {
			this.$store.commit('cookieChoiceDone');
			this.$store.commit('cookieChoice', this.allCookies);
			console.log('Button clicked: ' + this.$store.state.cookieChoice);
			console.log('Decision made: ' + this.$store.state.allCookies);
		}
	},

	mounted() {
		setTimeout(() => this.scrollFix(this.$route.hash), 1);
		this.state = this.$route.name;
		if (!this.$store.state.cookieChoice) {
			this.showCookieModal();
		}
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
		},
		showCookieModal() {
			this.allCookies = '';
			this.$bvModal.msgBoxConfirm('Diese Website verwendet funktionale Cookies, die zur Benutzung des hier angebotenen Online-Tests notwendig sind. Daneben werden optional auch Cookies von Drittanbietern verwendet, zur Einbindung unserer Twitter-Timeline. Bitte wählen Sie, welche Cookies Sie zulassen möchten.',{
				title: 'Cookie Information',
				size: 'md',
				buttonSize: 'md',
				okVariant: 'danger',
				okTitle: 'Okay, alle Cookies.',
				cancelTitle: 'Nur funktionale Cookies.',
				footerClass: 'p-3',
				hideHeaderClose: true,
				noCloseOnBackdrop: true,
				noCloseOnEsc: true,
				centered: true
			}).then(value => {
				this.allCookies = value;
			})
				.catch(err => {
					console.log(err); // An error occurred
				});
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
