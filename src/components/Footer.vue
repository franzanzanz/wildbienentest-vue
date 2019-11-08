<template>
	<div class="container-fluid py-5 footer">
		<div class="row">
			<div class="col-12 col-md-4 text-center text-md-left mb-4 mb-md-0">
				<router-link class="textlink" to="/imprint">
					Datenschutz / Impressum
				</router-link>
				<div class="dash pb-3 mb-3 mx-auto mx-md-0" />
				<p>
					© 2019 wildbienentest.de
				</p>
			</div>
			<div class="col-12 col-md-4 text-center">
				<img class="logo-footer" src="../assets/media/logo-wildbienentest.svg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: ''
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../assets/sass/_colors.scss";

	.footer {
		background-color: $bt-yellow-ultralight;
		border: solid transparent;
		border-width: 4px 0 0 0; /* border-bottom only */
		border-image-source: url('../../src/assets/media/border-blobs.svg');
		border-image-slice: 20%; /* no unit for px, you can use % */
		border-image-repeat: repeat; /* the middle slices will be repeated cleanly up to the edges */
	}

	.dash {
		border-bottom: 1px solid $bt-border-grey;
		width: 4rem;
	}

	.logo-footer {
		width: 5.5rem;
	}

	.textlink-footer{

	}

</style>