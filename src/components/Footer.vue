<template>
	<div class="container-fluid py-5 footer">
		<div class="row">
			<div class="col-12 col-md-4 text-center text-md-left mb-4 mb-md-0">
				<router-link
					class="textlink"
					to="/imprint"
				>
					Datenschutz / Impressum
				</router-link>
				<div class="dash pb-3 mb-3 mx-auto mx-md-0" />
				<p>
					© 2019 wildbienentest.de
				</p>
			</div>
			<div class="col-12 col-md-4 text-center">
				<router-link
					to="/"
				>
					<img class="logo-footer" src="../assets/media/logo-wildbienentest.svg" alt="">
				</router-link>
			</div>
		</div>
		<div class="row">
			<ol class="col credits-list mt-5">
				<p class="credits-list__headline mb-2">
					<strong>Bildnachweise, absteigend nach Einsatz auf dieser Seite</strong>
				</p>
				<li v-for="item in imageSources" :key="item.number" v-html="item.content" />
			</ol>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		content: {
			type: Object,
			default() {
				return { message: 'nothing here.' };
			}
		}
	},

	data() {
		return {
			imageSources: []
		};
	},

	mounted() {
		this.content.imagesourcesHome.forEach(element => {
			this.imageSources.push(element);
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import "../assets/sass/_colors.scss";
	@import "../assets/sass/_variables.scss";

	.footer {
		background-color: $yellow-ultralight;
		border: solid transparent;
		border-width: 4px 0 0 0; /* border-bottom only */
		border-image-source: url('../../src/assets/media/border-blobs.svg');
		border-image-slice: 20%; /* no unit for px, you can use % */
		border-image-repeat: repeat; /* the middle slices will be repeated cleanly up to the edges */


		.dash {
			border-bottom: 1px solid $border-grey;
			width: 4rem;
		}

		.logo-footer {
			width: 5.5rem;
		}

		.credits-list {
			list-style-position: inside;
			a {
				color: $red;
				&:hover {
					color: $red-darker;
					text-decoration: none;
				}
			}
		}

		.credits-list, .credits-list__headline {
			font-size: $font-size-credits;
		}
	}
</style>