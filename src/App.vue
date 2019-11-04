<template>
	<div id="app">
		<Navi />
		<Start
			v-if="state === 'start'"
			@showImprint="showImprint"
			@showSurvey="showSurvey"
		/>
		<Survey
			v-if="state === 'survey'"
			@showImprint="showImprint"
			@showStart="showStart"
		/>
		<Imprint
			v-if="state === 'imprint'"
			@showStart="showStart"
			@showSurvey="showSurvey"
		/>
		<Footer />
	</div>
</template>

<script>
import Navi from './components/Navi.vue';
import Start from './components/Start.vue';
import Survey from './components/Survey.vue';
import Imprint from './components/Imprint.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'WildbienenTest',
	components: {
		Navi,
		Start,
		Survey,
		Imprint,
		Footer
	},

	data() {
		return {
			state: 'start'
		};
	},

	methods: {
		showImprint() {
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
