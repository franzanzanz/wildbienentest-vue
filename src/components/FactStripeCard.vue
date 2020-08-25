<template>
	<div>
		<h1>
			{{ headline }}
		</h1>
		<p class="mb-0">
			{{ paragraph }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'FactStripeCard',
	props: {
		cardType: {
			type: String,
			default: 'big'
		},
		bigtext: {
			type: String,
			default: ''
		},
		smalltext: {
			type: String,
			default: ''
		}
	},

	data() {
		return {
			type: 'big',
			headline: '',
			paragraph: ''
		};
	},

	created() {
		this.headline = this.bigtext;
		this.paragraph = this.smalltext;
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import "../assets/sass/_colors.scss";
	@import "../assets/sass/_variables.scss";

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
</style>