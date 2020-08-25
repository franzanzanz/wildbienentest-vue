<template>
	<div id="facts-stripe" class="mb-5">
		<div class="container-fluid fact-stripe-wrapper">
			<div class="stripe-content">
				<div
					v-if="stripetype=='type-b'"
					class="row text-center mt-5 fact-stripe-headline"
				>
					<div class="col">
						<h2 class="mb-0">
							Hallo?
						</h2>
					</div>
				</div>
				<div class="row p-5 justify-content-center justify-content-sm-between">
					<FactStripeCard
						class="col-12 col-md-6 ml-md-auto mr-md-2 col-xl-2 mx-xl-auto fact-card text-center py-4 px-3 mb-5 mb-xl-0"
						card-type="big"
						bigtext="550"
						smalltext="Wildbienenarten gibt es in Deutschland"
					/>
					<FactStripeCard
						class="col-12 col-md-6 mx-md-auto col-xl-2 mx-xl-auto fact-card text-center py-4 px-3 mb-5 mb-xl-0"
						card-type="big"
						bigtext="70%"
						smalltext="der Nutzpflanzen weltweit sind auf Insektenbestäubung angewiesen"
					/>
					<FactStripeCard
						class="col-12 col-md-6 mx-md-auto col-xl-2 mx-xl-auto fact-card text-center py-4 px-3 mb-5 mb-md-0"
						card-type="big"
						bigtext="3."
						smalltext="drittwichtigstes Nutztier Deutschlands ist die Biene"
					/>
					<FactStripeCard
						class="col-12 col-md-6 mr-md-auto ml-md-2 col-xl-2 mx-xl-auto fact-card text-center py-4 px-3 mb-5 mb-sm-0"
						card-type="big"
						bigtext="2.000"
						smalltext="Blüten besucht eine Biene am Tag"
					/>
				</div>
			</div>
			<img
				class="stripe-image"
				:src="backgroundImage"
				alt="stripe-background"
			>
		</div>
	</div>
</template>

<script>
import FactStripeCard from '../components/FactStripeCard.vue';


export default {
	name: 'FactsStripe',

	components: {
		FactStripeCard
	},

	props: {
		stripetype: {
			type: String,
			default: 'type-a'
		},
		content: {
			type: Object,
			default() {
				return { message: 'empty.' };
			}
		}
	},

	data () {
		return {
			headlines: [],
			texts: [],
			rellax: {},
			cardType: '',
			imagesource: '',
			images: [
				'@/assets/media/eva-waardenburg-v-3NQ3pmWkY-unsplash.jpg',
				'@/assets/media/mike-erskine-zXxz8AAcSmE-unsplash.jpg'
			]
		};
	},

	computed: {
		backgroundImage: function () {
			switch (this.stripetype) {
			case 'type-a':
				return require('@/assets/media/eva-waardenburg-v-3NQ3pmWkY-unsplash.jpg');
			case 'type-b':
				return require('@/assets/media/mike-erskine-zXxz8AAcSmE-unsplash.jpg');
			default:
				return require('@/assets/media/eva-waardenburg-v-3NQ3pmWkY-unsplash.jpg');
			}
		}
	},

	created () {
	},

	mounted () {
		this.rellax = new this.$rellax('.stripe-image', {
			speed: 1.5,
			center: false,
			round: true,
			vertical: true,
			horizontal: false,
		});
	},

	methods: {
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../assets/sass/_colors.scss";
	.fact-stripe-wrapper {
			position: relative;
			overflow: hidden;

			.fact-stripe-headline {
				color: $red;
			}

			.stripe-content {
				position: relative;
				z-index: 1;
			}

			.stripe-image {
				position: absolute;
				top: 0;
				left: 0;
				scale: 1;
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

