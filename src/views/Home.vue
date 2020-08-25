<template>
	<div>
		<div id="home-top" class="stage-wrapper container-fluid mb-5 pb-4 pb-sm-0 px-0">
			<div class="stage-content container-fluid">
				<div class="row justify-content-center">
					<div class="col-12 text-sm-center pl-4 px-sm-0">
						<img class="logo-stage mt-3 mb-4 mb-sm-5 " src="../../src/assets/media/logo-wildbienentest.svg" alt="">
					</div>
				</div>
				<div class="row justify-content-center mt-0 mt-sm-5">
					<div class="col col-lg-6">
						<h1>Wie bienenfreundlich <br>ist mein Garten?</h1>
					</div>
				</div>
				<div class="row justify-content-center mb-2">
					<div class="col col-md-8 col-xl-6">
						<p class="text-center">
							Haben Sie sich eigentlich schon einmal gefragt, wie Ihr Garten aus Sicht einer Biene in puncto Gastfreundschaft abschneidet? Falls ja, dann hilft dieser Online-Test zur Abfrage der Bienenfreundlichkeit des eigenen Gartens bestimmt weiter. Sie beantworten 15 Fragen in den Kategorien Nistmöglichkeiten, Nahrungsangebot und Gefahren. Dadurch gewinnt der Test einen Eindruck von Ihrem Garten und kann Ihnen anschließend nützliche Tipps und gegebenenfalls Hinweise für eine Verbesserung der Wildbienenfreundlichkeit zur Hand geben.
						</p>
					</div>
				</div>
				<div class="row justify-content-center mt-4">
					<button
						class="btn btn-primary beebutton beebutton-large"
					>
						Test starten
					</button>
				</div>
				<div class="row justify-content-center my-4">
					<router-link
						class="textlink-kalam"
						to="#home-intro"
						@click.native="scrollFix('#home-intro-1')"
					>
						mehr Infos
					</router-link>
				</div>
			</div>
			<img
				class="stage-image"
				src="../../src/assets/media/stage_blurred.jpg"
				alt="background-image"
			>
		</div>

		<!-- INTRO SECTION -->

		<div class="intro-wrapper">
			<div id="home-intro-1" class="container mb-5">
				<div class="row justify-content-center">
					<div class="col col-lg-6">
						<h1>
							Wie bienenfreundlich <br>ist mein Garten?
						</h1>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col col-lg-8">
						<p>
							Wussten Sie, dass es in Deutschland rund 550 Wildbienenarten gibt? Nein? Aber wussten Sie denn, dass 70% der weltweit wichtigsten Nutzpflanzen auf die Bestäubung durch Insekten angewiesen sind? Die Biene ist Deutschlands drittwichtigstes Nutztier nach Schwein und Rind. Sie besucht am Tag bis zu 2.000 Blüten.
						</p>
					</div>
				</div>
			</div>

			<FactStripe
				stripetype="type-a"
			/>

			<div id="home-intro-2" class="container">
				<div class="row justify-content-center">
					<div class="col col-lg-8 d-flex flex-column">
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
				<div class="row text-center">
					<div class="col">
						<h1>
							Pflanztipps
						</h1>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col col-lg-8">
						<p class="mb-5">
							In der Übersicht unten finden Sie eine kleine Auswahl an Pflanzen, die bei Wildbienen besonders beliebt sind. Wenn Sie sich noch eingehender mit dem Thema befassen möchten, schauen Sie sich unsere <a href="#home-tipps">Link-Tipps</a> weiter unten an.
						</p>
					</div>
				</div>

				<div class="row text-center">
					<div class="col-12">
						<h2 class="mb-5 red">
							Diese Pflanzen mögen Wildbienen ganz besonders
						</h2>
					</div>
				</div>
			</div>

			<div class="container-fluid container-pflanztipps">
				<div class="row">
					<div class="col-12 col-lg-7">
						<div class="container-fluid">
							<div class="row">
								<div class="col-12 py-3 mb-3 text-center pflanzen-head">
									Zierpflanzen
								</div>
								<div class="col-12 col-md-4 text-center px-0 pr-md-2">
									<div class="py-3 mb-4 pflanzen-subhead spring">
										Frühjahr
									</div>
									<PlantCard plantname="Schlehe" url="https://de.wikipedia.org/wiki/Schlehdorn" />
									<PlantCard plantname="Frühlingskrokus" url="https://de.wikipedia.org/wiki/Fr%C3%BChlings-Krokus" />
									<PlantCard plantname="Lungenkraut" url="https://de.wikipedia.org/wiki/Lungenkr%C3%A4uter" />
									<PlantCard plantname="Heckenkirsche" url="https://de.wikipedia.org/wiki/Heckenkirschen" />
									<PlantCard plantname="Winterling" url="https://de.wikipedia.org/wiki/Winterling" />
									<PlantCard plantname="Traubenhyazinthe" url="https://de.wikipedia.org/wiki/Traubenhyazinthen" />
								</div>

								<div class="col-12 col-md-4 text-center px-0 px-md-2">
									<div class="py-3 mb-4 pflanzen-subhead summer">
										Sommer
									</div>
									<PlantCard plantname="Glockenblume" url="https://de.wikipedia.org/wiki/Glockenblumen" />
									<PlantCard plantname="Wicke" url="https://de.wikipedia.org/wiki/Wicken_(Vicia)" />
									<PlantCard plantname="Ehrenpreis" url="https://de.wikipedia.org/wiki/Ehrenpreis" />
									<PlantCard plantname="Garten-Resede" url="https://de.wikipedia.org/wiki/Garten-Resede" />
									<PlantCard plantname="Berg-Ziest" url="https://de.wikipedia.org/wiki/Aufrechter_Ziest" />
									<PlantCard plantname="Lavendel" url="https://de.wikipedia.org/wiki/Echter_Lavendel" />
								</div>

								<div class="col-12 col-md-4 text-center px-0 pl-md-2">
									<div class="py-3 mb-4 pflanzen-subhead fall">
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
					</div>

					<div class="col-12 col-lg-5">
						<div class="container-fluid">
							<div class="row">
								<div class="col-12 py-3 mb-3 text-center pflanzen-head nutzpflanzen">
									Nutzpflanzen
								</div>
								<div class="col-12 col-md-6 text-center px-0 pr-md-2">
									<div class="py-3 mb-4 pflanzen-subhead fruit">
										Früchte
									</div>
									<PlantCard plantname="Johannisbeere" url="https://de.wikipedia.org/wiki/Rote_Johannisbeere" />
									<PlantCard plantname="Himbeere" url="https://de.wikipedia.org/wiki/Himbeere" />
									<PlantCard plantname="Brombeere" url="https://de.wikipedia.org/wiki/Brombeeren" />
									<PlantCard plantname="Apfel" url="https://de.wikipedia.org/wiki/Kulturapfel" />
								</div>

								<div class="col-12 col-md-6 text-center px-0 pl-md-2">
									<div class="py-3 mb-4 pflanzen-subhead herbs">
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
		</div>

		<!-- PROJECTINFO SECTION -->

		<div id="home-about" class="container my-5">
			<div
				:class="allCookiesAllowed ? '' : 'justify-content-center'"
				class="row"
			>
				<div
					:class="projectInfoClasses"
				>
					<h1 class="text-left">
						Zum Projekt
					</h1>
					<p>
						Im Wintersemester 2015/2016 hat sich an der Leuphana Universität Lüneburg das Projektteam für Inter- und Transdisziplinäre Zusammenarbeit zum Thema Bienen in der Stadt gebildet. Das Team bestand aus fünf Studentinnen des Nebenfachs Nachhaltigkeitsnaturwissenschaften – im Hauptfach studierten sie Wirtschaftspsychologie, Politik- oder Kulturwissenschaften. Unter der methodischen und fachlichen Betreuung von drei Dozentinnen wurde in dem halbjährigen Projekt gemeinsam an einer Forschungsfrage und daraufhin an dem hier vorgestellten Test gearbeitet. <br><br>Als Ziel des Projekts galt es, Wissen und Methoden verschiedener Fachbereiche („Disziplinen“) zu integrieren. Dies geschah durch die verschiedenen Fachrichtungen der Studierenden, aber auch durch den Einbezug von Praxisakteuren in die Forschungsarbeit. So wurden zum Beispiel Interviews mit Berufsimkern und Vertretern des NABU geführt.
					</p>
				</div>
				<div
					v-if="allCookiesAllowed"
					class="col col-lg-4 twitter-timeline"
				>
					<twitter>
						<a
							class="twitter-timeline"
							data-height="500"
							data-dnt="true"
							data-chrome="transparent"
							href="https://twitter.com/wildbienentest?ref_src=twsrc%5Etfw"
						>
							Tweets by wildbienentest
						</a>
					</twitter>
				</div>
			</div>
		</div>

		<div id="home-team">
			<FactStripe
				stripetype="type-b"
			/>
		</div>
	</div>
</template>

<script>
import { methodMixin } from '../methodMixin';
import FactStripe from '../components/FactStripe.vue';
import PlantCard from '../components/PlantCard.vue';
import datasource from '../assets/sourcefile.json';


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
		},
		showtwitter: {
			type: Boolean,
			default: false
		}
	},

	data () {
		return {
			pageContent: datasource.frontpage,
			rellax: {}
		};
	},

	computed: {
		allCookiesAllowed: function () {
			return this.$store.state.allCookies;
		},

		projectInfoClasses: function () {
			return this.allCookiesAllowed ? 'col col-lg-8 pr-lg-5' : 'col col-lg-8';
		}
	},

	mounted () {
		this.rellax = new this.$rellax('.stage-image', {
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
@import "../assets/sass/_variables.scss";
@import "../assets/sass/_colors.scss";
@import "../assets/sass/_animations.scss";

.stage-wrapper {
	position: relative;
	overflow: hidden;

	.stage-content {
		position: relative;
		z-index: 9;
	}

	.stage-image {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}

	@media (min-width: 768px) {
		height: 100vh;
	}
}

.logo-stage {
	width: 5rem;
}

.twitter-timeline {
	background: $blue-ultralight;
	// background: $gradient-warm-cold_50alpha;
	border-radius: $radius-base;
	border: 4px dotted $red-ultralight;
}

.pflanztipps-wrapper {
	// background: url("../../src/assets/media/floral_pattern_infinite_blurred.jpg") repeat center;
	background: $warm-50alpha;
	background: $gradient-warm-cold_50alpha-webkit;
	background: $gradient-warm-cold_50alpha-moz;
	background: $gradient-warm-cold_50alpha;

	.container-pflanztipps {
		max-width: 1200px;
	}

	.pflanzen-head {
		font-weight: 600;
		text-transform: uppercase;
		border-top-left-radius: $radius-base;
		border-top-right-radius: $radius-base;

		background: $peach-1;
		background: $gradient-peach-webkit;
		background: $gradient-peach-moz;
		background: $gradient-peach;

		&.nutzpflanzen {
			background: $lime-1;
			background: $gradient-lime-webkit;
			background: $gradient-lime-moz;
			background: $gradient-lime;
		}
	}
	.pflanzen-subhead {
		font-weight: 600;
		border-top-left-radius: $radius-base;
		border-top-right-radius: $radius-base;
		background: $lime-1;

		&.spring {
			background: $peach-1;
		}

		&.summer {
			background: $peach-2;
		}

		&.fall {
			background: $peach-3;
		}

		&.fruit {
			background: $lime-1;
		}

		&.herbs {
			background: $lime-2;
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
