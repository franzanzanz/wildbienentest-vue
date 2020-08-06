<template>
	<div id="facts-stripe" class="container-fluid mb-5">
		<div class="row facts-stripe px-5 py-5 justify-content-center justify-content-sm-between">
			<div class="col-12 col-md-6 ml-md-auto mr-md-2 col-xl-2 mx-xl-auto fact-card text-center py-4 px-3 mb-5 mb-xl-0">
				<h1>
					550
				</h1>
				<p class="mb-0">
					Wildbienenarten gibt es in Deutschland
				</p>
			</div>
			<div class="col-12 col-md-6 mx-md-auto col-xl-2 mx-xl-auto fact-card text-center py-4 px-3 mb-5 mb-xl-0">
				<h1>
					70%
				</h1>
				<p class="mb-0">
					der Nutzpflanzen weltweit sind auf Insektenbestäubung angewiesen
				</p>
			</div>
			<div class="col-12 col-md-6 mx-md-auto col-xl-2 mx-xl-auto fact-card text-center py-4 px-3 mb-5 mb-md-0">
				<h1>
					3.
				</h1>
				<p class="mb-0">
					drittwichtigstes Nutztier Deutschlands ist die Biene
				</p>
			</div>
			<div class="col-12 col-md-6 mr-md-auto ml-md-2 col-xl-2 mx-xl-auto fact-card text-center py-4 px-3 mb-5 mb-sm-0">
				<h1>
					2.000
				</h1>
				<p class="mb-0">
					Blüten besucht eine Biene am Tag
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FactsStripe',
	props: {
		content: {
			type: Object,
			default() {
				return { message: 'empty.' };
			}
		}
	},

	data () {
		return {
			stripetype: 'big',
			headlines: [],
			texts: []
		};
	},

	computed: {

	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../assets/sass/_colors.scss";

	.facts-stripe {
		background: url("../../src/assets/media/zoe-gayah-jonker-q5c84C6h_Y8-unsplash.jpg") no-repeat fixed center;
		background-size: cover;

		.fact-card {
			border: 4px dotted $bt-red-025alpha;
			background-color: $bt-red-01alpha;
			border-radius: 1rem;
			h1 {
				font-size: 5rem;
				font-weight: 700;
				color: $bt-red;
				margin-bottom: -1rem;
			}
			p {
				font-weight: 600;
				line-height: 1.4rem;
			}
		}
	}

	@media (min-width: 768px) {
		.fact-card {
			min-width: 20vw;
			max-width: 38vw;
		}
	}
</style>

