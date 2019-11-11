<template>
	<div class="container-fluid px-0">
		<div class="stage container-fluid">
			<div class="row justify-content-center">
				<div class="col-12 text-sm-center pl-4 px-sm-0">
					<img class="logo-stage" src="../../src/assets/media/logo-wildbienentest.svg" alt="">
				</div>
			</div>
			<div class="row justify-content-center mb-3">
				<div class="col col-lg-6">
					<h1>Wie bienenfreundlich <br>ist mein Garten?</h1>
				</div>
			</div>
			<div class="row justify-content-center mb-2">
				<div class="col col-md-8 col-xl-6">
					<p class="text-center">
						Hier steht ein kurzer Introtext, der in einem knappen Absatz vermittelt, welche Motivation und welcher Nutzen hinter diesem Online-Test hier stecken. Das hat den Hintergrund, dass Leute sofort mit dem Test beginnen können, wenn sie möchten, ohne längere Texte lesen zu müssen. Wer vorab mehr erfahren möchte gelangt über “mehr lesen” zur Intro-Sektion weiter unten auf der Startseite.
					</p>
				</div>
			</div>
			<div class="row justify-content-center mb-5">
				<a class="textlink-kalam" href="#">mehr lesen</a>
			</div>
			<div class="row justify-content-center">
				<button
					class="btn btn-primary beebutton beebutton-large"
					@click="$emit('showSurvey')"
				>
					Test starten
				</button>
			</div>
		</div>
		<div id="home-intro" class="container-fluid my-5">
			<div class="row justify-content-center">
				<div class="col col-lg-6">
					<h1 class="mb-4">
						Wie bienenfreundlich <br>ist mein Garten?
					</h1>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col col-sm-8">
					<p class="mb-5">
						Wussten Sie, dass es in Deutschland rund 550 Wildbienenarten gibt? Nein? Aber wussten Sie denn, dass 70% der weltweit wichtigsten Nutzpflanzen auf die Bestäubung durch Insekten angewiesen sind? Die Biene ist Deutschlands drittwichtigstes Nutztier nach Schwein und Rind. Sie besucht am Tag bis zu 2.000 Blüten.
					</p>
				</div>
			</div>

			<div id="facts-stripe" class="row facts-stripe py-5 justify-content-center justify-content-sm-between mb-5">
				<div class="col-12 col-md-6 col-xl-2 fact-card text-center py-4 px-3 mb-5 mb-xl-0">
					<h1>
						550
					</h1>
					<p class="mb-0">
						Wildbienenarten gibt es in Deutschland
					</p>
				</div>
				<div class="col-12 col-md-6 col-xl-2 fact-card text-center py-4 px-3 mb-5 mb-xl-0">
					<h1>
						70%
					</h1>
					<p class="mb-0">
						der Nutzpflanzen weltweit sind auf Insektenbestäubung angewiesen
					</p>
				</div>
				<div class="col-12 col-md-6 col-xl-2 fact-card text-center py-4 px-3 mb-5 mb-md-0">
					<h1>
						3.
					</h1>
					<p class="mb-0">
						drittwichtigstes Nutztier Deutschlands ist die Biene
					</p>
				</div>
				<div class="col-12 col-md-6 col-xl-2 fact-card text-center py-4 px-3 mb-5 mb-sm-0">
					<h1>
						2.000
					</h1>
					<p class="mb-0">
						Blüten besucht eine Biene am Tag
					</p>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col col-sm-8 d-flex flex-column">
					<p>
						Wenn es sie nicht mehr gibt, haben wir sehr bald ein Problem. Moment mal – dieses Problem haben wir bereits! Über die Hälfte der Wildbienenarten in Deutschland sind vom Aussterben bedroht. In manchen Gegenden gibt es gar keine Wildbienen mehr.
					</p>
					<p>
						Dabei ist es einfach, der Wildbiene ein Stück Lebensraum zu schaffen. Wichtig dafür ist, den Tieren Nistplätze und Nahrung zur Verfügung zu stellen und sie vor Gefahren zu schützen. Dann kann auch ein Garten wie Ihrer bald zu einem Refugium für die bedrohten Tiere werden – und Sie werden im Gegenzug von Frühjahr bis Herbst mit einer wunderschönen Blütenpracht belohnt.
					</p>
					<p>
						Der erste Schritt hin zu einem bienenfreundlichen Garten ist ganz leicht: Mit diesem Test können Sie herausfinden, ob Ihr Garten schon ein Wildbienenparadies ist oder noch bienenfreundlicher gestaltet werden kann. In jedem Fall haben wir einige Tipps für Sie parat! Sie werden darüber staunen, wie einfach und schön es sein kann, Wildbienen im Garten zu haben.
					</p>
					<p>
						Klicken Sie sich durch diesen Online-Test und geben Sie dabei jeweils die Antwort an, die am eheseten auf Sie und Ihren Garten zutrifft. er Test besteht aus den Rubriken „Nistplätze und Überwinterungsmöglichkeiten”, „Nahrungsangebot” und „Gefahren”. Am Schluss erhalten Sie für jeden Testteil ein individuelles Ergebnis.
					</p>
					<p>
						Wir wünschen Ihnen viel Spaß!
					</p>
					<button
						class="btn btn-primary beebutton beebutton-large mt-3 align-self-center"
						@click="$emit('showSurvey')"
					>
						Test starten
					</button>
				</div>
			</div>
		</div>
		<div class="container-fluid my-5">
			twitter
		</div>

		<div id="home-tipps" class="container-fluid my-5">
			Pflanztipps
		</div>

		<div id="home-infos" class="container-fluid my-5">
			Projektinfos
		</div>

		<div id="home-team" class="container-fluid my-5">
			Team
		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	props: {
		msg: {
			type: String,
			default: ''
		}
	},

	created() {

	}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/_colors.scss";
@import "../assets/sass/_animations.scss";

.stage {
	height: 100vh;
	background: url("../../src/assets/media/stage_blurred.jpg") no-repeat fixed center;
	background-size: cover;
}

.logo-stage {
	width: 5rem;
	margin-top: 1rem;
	margin-bottom: 3rem;
}

.facts-stripe {
	// height: 20rem;
	background: url("../../src/assets/media/zoe-gayah-jonker-q5c84C6h_Y8-unsplash.jpg") no-repeat fixed center;
	background-size: cover;
	padding-left: 5rem;
	padding-right: 5rem;
}

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

@media (min-width: 768px) {
	.logo-stage {
		width: 8rem;
		margin-top: 3rem;
		margin-bottom: 5rem;
	}

	.fact-card {
		min-width: 20vw;
		max-width: 38vw;
	}

}


</style>
