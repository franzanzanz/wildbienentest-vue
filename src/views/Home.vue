<template>
	<div>
		<div id="home-top" class="stage container-fluid mb-5 pb-4 pb-sm-0">
			<div class="row justify-content-center">
				<div class="col-12 text-sm-center pl-4 px-sm-0">
					<img class="logo-stage mt-3 mb-4 mb-sm-5 " src="../../src/assets/media/logo-wildbienentest.svg" alt="">
				</div>
			</div>
			<div class="row justify-content-center mt-0 mt-sm-5 mb-3">
				<div class="col col-lg-6">
					<h1>Wie bienenfreundlich <br>ist mein Garten?</h1>
				</div>
			</div>
			<div class="row justify-content-center mb-2">
				<div class="col col-md-8 col-xl-6">
					<p class="text-center">
						Hier steht ein kurzer Introtext, der in einem knappen Absatz vermittelt, welche Motivation und welcher Nutzen hinter diesem Online-Test hier stecken. Das hat den Hintergrund, dass Leute sofort mit dem Test beginnen können, wenn sie möchten, ohne längere Texte lesen zu müssen.
					</p>
				</div>
			</div>
			<div class="row justify-content-center mb-5">
				<router-link
					class="textlink-kalam"
					to="#home-intro"
					@click.native="scrollFix('#home-intro')"
				>
					mehr lesen
				</router-link>
			</div>
			<div class="row justify-content-center mb-5">
				<button
					class="btn btn-primary beebutton beebutton-large"
					@click="$emit('showSurvey')"
				>
					Test starten
				</button>
			</div>
		</div>

		<!-- INTRO SECTION -->

		<div class="intro-wrapper">
			<div id="home-intro-1" class="container mb-5">
				<div class="row justify-content-center">
					<div class="col col-lg-6">
						<h1 class="mb-4">
							Wie bienenfreundlich <br>ist mein Garten?
						</h1>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col col-sm-8">
						<p>
							Wussten Sie, dass es in Deutschland rund 550 Wildbienenarten gibt? Nein? Aber wussten Sie denn, dass 70% der weltweit wichtigsten Nutzpflanzen auf die Bestäubung durch Insekten angewiesen sind? Die Biene ist Deutschlands drittwichtigstes Nutztier nach Schwein und Rind. Sie besucht am Tag bis zu 2.000 Blüten.
						</p>
					</div>
				</div>
			</div>
			<FactStripe />
			<div id="home-intro-2" class="container">
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
		</div>

		<!-- PFLANZTIPPS SECTION -->
		<div id="home-tipps" class="pflanztipps-wrapper my-5 py-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col col-lg-6">
						<h1 class="mb-4">
							Pflanztipps
						</h1>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col col-sm-8">
						<p class="mb-5">
							In der Übersicht unten finden Sie eine kleine Auswahl an Pflanzen, die bei Wildbienen besonders beliebt sind. Wenn Sie sich noch intensiver mit dem Thema befassen wollen, können wir Ihnen <a href="https://www.bmel.de/SharedDocs/Downloads/Broschueren/Bienenlexikon.pdf?__blob=publicationFile" target="_blank" rel="noopener">dieses Infodokument</a> des Bundesministeriums für Ernährung und Landwirtschaft wärmstens empfehlen.
						</p>
					</div>
				</div>
			</div>

			<div class="container-fluid">
				<div class="row">
					<div class="col-12 col-lg-7">
						<div class="row px-5 px-lg-0 pl-lg-5 mr-lg-4">
							<div class="col-12 py-2 mb-3 text-center pflanzen-head">
								Zierpflanzen
							</div>
							<div class="col-12 col-md-4 px-0 text-center">
								<div class="py-2 pflanzen-subhead">
									Frühjahr
								</div>
								<PlantCard plantname="Schlehe" url="https://de.wikipedia.org/wiki/Schlehdorn" />
								<PlantCard plantname="Frühlingskrokus" url="https://de.wikipedia.org/wiki/Fr%C3%BChlings-Krokus" />
								<PlantCard plantname="Lungenkraut" url="https://de.wikipedia.org/wiki/Lungenkr%C3%A4uter" />
								<PlantCard plantname="Heckenkirsche" url="https://de.wikipedia.org/wiki/Heckenkirschen" />
								<PlantCard plantname="Winterling" url="https://de.wikipedia.org/wiki/Winterling" />
								<PlantCard plantname="Traubenhyazinthe" url="https://de.wikipedia.org/wiki/Traubenhyazinthen" />
							</div>

							<div class="col-12 col-md-4 text-center">
								<div class="py-2 pflanzen-subhead">
									Sommer
								</div>
								<PlantCard plantname="Glockenblume" url="https://de.wikipedia.org/wiki/Glockenblumen" />
								<PlantCard plantname="Wicke" url="https://de.wikipedia.org/wiki/Wicken_(Vicia)" />
								<PlantCard plantname="Ehrenpreis" url="https://de.wikipedia.org/wiki/Ehrenpreis" />
								<PlantCard plantname="Garten-Resede" url="https://de.wikipedia.org/wiki/Garten-Resede" />
								<PlantCard plantname="Berg-Ziest" url="https://de.wikipedia.org/wiki/Aufrechter_Ziest" />
								<PlantCard plantname="Lavendel" url="https://de.wikipedia.org/wiki/Echter_Lavendel" />
							</div>

							<div class="col-12 col-md-4 pr-0 text-center">
								<div class="py-2 pflanzen-subhead">
									Herbst
								</div>
								<PlantCard plantname="Natternkopf" url="https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Natternkopf" />
								<PlantCard plantname="Skabiose" url="https://de.wikipedia.org/wiki/Skabiosen" />
								<PlantCard plantname="Eisenhut" url="https://de.wikipedia.org/wiki/Eisenhut" />
								<PlantCard plantname="Stockrose" url="https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Stockrose" />
								<PlantCard plantname="Herbst-Aster" url="https://de.wikipedia.org/wiki/Astern" />
								<PlantCard plantname="Sonnenblume" url="https://de.wikipedia.org/wiki/Sonnenblume" />
							</div>
						</div>
					</div>

					<div class="col-12 col-lg-5">
						<div class="row px-5 px-lg-0 pr-lg-5">
							<div class="col-12 py-2 mb-3 text-center pflanzen-head">
								Nutzpflanzen
							</div>
							<div class="col-12 col-md-6 pl-0 text-center">
								<div class="py-2 pflanzen-subhead">
									Früchte
								</div>
								<PlantCard plantname="Johannisbeere" url="https://de.wikipedia.org/wiki/Rote_Johannisbeere" />
								<PlantCard plantname="Himbeere" url="https://de.wikipedia.org/wiki/Himbeere" />
								<PlantCard plantname="Brombeere" url="https://de.wikipedia.org/wiki/Brombeeren" />
								<PlantCard plantname="Apfel" url="https://de.wikipedia.org/wiki/Kulturapfel" />
							</div>

							<div class="col-12 col-md-6 pr-0 text-center">
								<div class="py-2 pflanzen-subhead">
									Küchenkräuter
								</div>
								<PlantCard plantname="Salbei" url="https://de.wikipedia.org/wiki/Echter_Salbei" />
								<PlantCard plantname="Ysop" url="https://de.wikipedia.org/wiki/Ysop" />
								<PlantCard plantname="Zitronenmelisse" url="https://de.wikipedia.org/wiki/Zitronenmelisse" />
								<PlantCard plantname="Oregano" url="https://de.wikipedia.org/wiki/Oregano" />
								<PlantCard plantname="Bohnenkraut" url="https://de.wikipedia.org/wiki/Bohnenkr%C3%A4uter" />
								<PlantCard plantname="Thymian" url="https://de.wikipedia.org/wiki/Thymiane" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- PROJECTINFO SECTION -->

		<div id="home-about" class="container-fluid my-5">
			<div class="row justify-content-center px-5">
				<div class="col col-lg-8">
					Projektinfos
				</div>
				<div class="col col-lg-3 twitter-timeline">
					<twitter>
						<a class="twitter-timeline" data-height="700" data-dnt="true" data-chrome="transparent" href="https://twitter.com/wildbienentest?ref_src=twsrc%5Etfw">Tweets by wildbienentest</a>
					</twitter>
				</div>
			</div>
		</div>

		<div id="home-team" class="container-fluid my-5">
			Team
		</div>
	</div>
</template>

<script>
import { methodMixin } from '../methodMixin';
import FactStripe from '../components/FactStripe.vue';
import PlantCard from '../components/PlantCard.vue';

export default {
	name: 'Home',
	components: {
		FactStripe,
		PlantCard
	},
	mixins: [methodMixin],
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
@import "../assets/sass/_animations.scss";

.stage {
	background: url("../../src/assets/media/stage_blurred.jpg") no-repeat fixed center;
	background-size: cover;

	@media (min-width: 768px) {
		height: 100vh;
	}
}

.logo-stage {
	width: 5rem;
	// margin-top: 1rem;
	// margin-bottom: 3rem;
}

.twitter-timeline {
	background: rgb(254,238,231);
	background: linear-gradient(32deg, rgba(254,238,231,1) 0%, rgba(235,254,255,1) 100%);
	border-radius: 15px;
	border: 4px dotted $bt-red-ultralight;
}

.pflanztipps-wrapper {
	background: url("../../src/assets/media/bgnd_floral-illus.jpg") no-repeat center;
	background-size: cover;

	.pflanzen-head {
		border: 2px solid $bt-red;
		font-weight: 600;
		text-transform: uppercase;
	}
	.pflanzen-subhead {
		border: 2px solid $bt-green;
		font-weight: 600;
		border-top-left-radius: 15px;
		border-bottom-right-radius: 15px;
	}

	.pflanzen-card {
		.pflanzenbild {
			width: 6rem;
			height: 6rem;
			border-radius: 100%;
			border: 2px solid $bt-green;
		}
		.pflanzenlink {
			font-weight: 600;
			color: $bt-green;
		}
		.schlehe {
			background: url("https://upload.wikimedia.org/wikipedia/commons/7/7a/Schlehenbl%C3%BCte_IV.jpeg") no-repeat center;
			background-size: 200%;
		}
		.krokus {
			background: url("https://upload.wikimedia.org/wikipedia/commons/e/e2/CrocusVernus.jpg") no-repeat center;
			background-size: 200%;
		}
		.lungenkraut {
			background: url("https://upload.wikimedia.org/wikipedia/commons/4/44/Pulmonaria_affinis.jpg") no-repeat center;
			background-size: 100%;
		}
		.heckenkirsche {
			background: url("https://upload.wikimedia.org/wikipedia/commons/0/0e/Wohlriechende_Heckenkirsche%2C_Passau.jpg") no-repeat center;
			background-size: 300%;
		}
		.winterling {
			background: url("https://upload.wikimedia.org/wikipedia/commons/b/b4/Winterling-Bluete-70.jpg") no-repeat center;
			background-size: 150%;
		}
		.traubenhyazinthe {
			background: url("https://upload.wikimedia.org/wikipedia/commons/1/1a/Muscari_armeniacum_4.jpg") no-repeat center;
			background-size: 200%;
		}
	}
}

@media (min-width: 768px) {
	.logo-stage {
		width: 8rem;
		margin-top: 3rem;
		margin-bottom: 5rem;
	}
}


</style>
