<template>
	<div id="facts-stripe" class="mb-5">
		<div class="container-fluid fact-stripe-wrapper">
			<div class="stripe-content">
				<div class="row p-5 justify-content-center justify-content-sm-between">
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
			<img
				class="stripe-image"
				src="../../src/assets/media/eva-waardenburg-v-3NQ3pmWkY-unsplash.jpg"
				alt="stripe-background"
			>
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
			texts: [],
			rellax: {}
		};
	},

	mounted () {
		this.rellax = new this.$rellax('.stripe-image', {
			speed: 1.5,
			center: false,
			round: true,
			vertical: true,
			horizontal: false
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../assets/sass/_colors.scss";
	.fact-stripe-wrapper {
			position: relative;
			overflow: hidden;

			.stripe-content {
				position: relative;
				z-index: 1;
				.fact-card {
					border: 4px dotted $red-025alpha;
					background-color: $red-01alpha;
					border-radius: 1rem;
					h1 {
						font-size: 5rem;
						font-weight: 700;
						color: $red;
						margin-bottom: -1rem;
					}
					p {
						font-weight: 600;
						line-height: 1.4rem;
					}
				}
			}

			.stripe-image {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				z-index: 0;
			}
		}

	.facts-stripe {
		background: url("../../src/assets/media/zoe-gayah-jonker-q5c84C6h_Y8-unsplash.jpg") no-repeat center center fixed;
		background-size: cover;
	}

	@media (min-width: 768px) {
		.fact-card {
			min-width: 20vw;
			max-width: 38vw;
		}
	}
</style>

