<template>
	<div class="mt-2 mb-4 pflanzen-card">
		<a
			:href="url"
			target="_blank"
			rel="noopener"
			class="d-block mx-auto pflanzenbild"
			:class="plantname"
		/>
		<a
			class="pflanzenlink"
			:href="url"
			target="_blank"
			rel="noopener"
		>
			{{ plantname }}
		</a>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		plantname: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../assets/sass/_colors.scss";

	.pflanzen-card {
		.pflanzenbild {
			width: 6rem;
			height: 6rem;
			border-radius: 100%;
			background-size: 100%;
			background-repeat: no-repeat;
			background-position: center;
		}
		.pflanzenlink {
			font-weight: 600;
			color: $red;
		}

		// ZIERPFLANZEN
		// Frühjahr
		.Schlehe {
			background-image: url("../../src/assets/media/wikipedia/Schlehenblüte_IV.jpeg");
		}
		.Frühlingskrokus {
			background-image: url("../../src/assets/media/wikipedia/CrocusVernus.jpg");
		}
		.Lungenkraut {
			background-image: url("../../src/assets/media/wikipedia/lungenkraut.jpg");
		}
		.Heckenkirsche {
			background-image: url("../../src/assets/media/wikipedia/heckenkirsche.jpg");
		}
		.Winterling {
			background-image: url("../../src/assets/media/wikipedia/Winterling-Bluete-70.jpg");
		}
		.Traubenhyazinthe {
			background-image: url("../../src/assets/media/wikipedia/traubenhyazinthe.jpg");
		}
		// Sommer
		.Glockenblume {
			background-image: url("../../src/assets/media/wikipedia/glockenblume.jpg");
		}
		.Wicke {
			background-image: url("../../src/assets/media/wikipedia/wicke.jpg");
		}
		.Ehrenpreis {
			background-image: url("../../src/assets/media/wikipedia/ehrenpreis.jpg");
		}
		.Garten-Resede {
			background-image: url("../../src/assets/media/wikipedia/Reseda_odorata_2015.jpg");
		}
		.Berg-Ziest {
			background-image: url("../../src/assets/media/wikipedia/ziest-aufrechter.jpg");
		}
		.Lavendel {
			background-image: url("../../src/assets/media/wikipedia/lavendel.jpg");
		}
		// Herbst
		.Natternkopf {
			background-image: url("../../src/assets/media/wikipedia/natternkopf_gewoehnlicher.jpg");
		}
		.Skabiose {
			background-image: url("../../src/assets/media/wikipedia/Skabiose01.jpg");
		}
		.Eisenhut {
			background-image: url("../../src/assets/media/wikipedia/eisenhut.jpg");
		}
		.Stockrose {
			background-image: url("../../src/assets/media/wikipedia/stockrose.jpg");
		}
		.Herbst-Aster {
			background-image: url("../../src/assets/media/wikipedia/Bergaster.jpg");
		}
		.Sonnenblume {
			background-image: url("../../src/assets/media/wikipedia/sonnenblume.jpg");
		}

		// Nutzpflanzen
		// Früchte
		.Johannisbeere {
			background-image: url("../../src/assets/media/wikipedia/johannisbeere.jpg");
		}
		.Himbeere {
			background-image: url("../../src/assets/media/wikipedia/himbeerbluete.jpg");
		}
		.Brombeere {
			background-image: url("../../src/assets/media/wikipedia/brombeere.jpg");
		}
		.Apfel {
			background-image: url("../../src/assets/media/wikipedia/apfelbluete.jpg");
		}
		// Kräuter
		.Salbei {
			background-image: url("../../src/assets/media/wikipedia/Salvia_officinalis.jpg");
		}
		.Ysop {
			background-image: url("../../src/assets/media/wikipedia/ysop.jpg");
		}
		.Zitronenmelisse {
			background-image: url("../../src/assets/media/wikipedia/zitronenmelisse.jpg");
		}
		.Oregano {
			background-image: url("../../src/assets/media/wikipedia/oregano.jpg");
		}
		.Bohnenkraut {
			background-image: url("../../src/assets/media/wikipedia/bohnenkraut.jpg");
		}
		.Thymian {
			background-image: url("../../src/assets/media/wikipedia/thymian.jpg");
		}
	}

</style>