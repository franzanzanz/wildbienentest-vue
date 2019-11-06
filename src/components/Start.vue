<template>
	<div class="container-fluid px-0">
		<div class="stage container-fluid">
			<div class="row justify-content-center">
				<div class="col col-lg-2 text-center">
					<img class="logo-stage" src="../../src/assets/media/logo-wildbienentest.svg" alt="">
				</div>
			</div>
			<div class="row justify-content-center mb-3">
				<div class="col col-lg-4">
					<h1>Wie bienenfreundlich <br>ist mein Garten?</h1>
				</div>
			</div>
			<div class="row justify-content-center mb-2">
				<div class="col col-md-8 col-lg-6">
					<p class="p-stage">
						Hier steht ein kurzer Introtext, der in einem knappen Absatz vermittelt, welche Motivation und welcher Nutzen hinter diesem Online-Test hier stecken. Das hat den Hintergrund, dass Leute sofort mit dem Test beginnen können, wenn sie möchten, ohne längere Texte lesen zu müssen. Wer vorab mehr erfahren möchte gelangt über “mehr lesen” zur Intro-Sektion weiter unten auf der Startseite.
					</p>
				</div>
			</div>
			<div class="row justify-content-center mb-5">
				<a class="textlink" href="#">mehr lesen</a>
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
		<div class="alert-success">
			Start Screen
		</div>
		<button
			class="btn btn-primary mt-4"
			@click="$emit('showImprint')"
		>
			show imprint
		</button>
	</div>
</template>

<script>
export default {
	name: 'Start',
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

.stage {
	height: 100vh;
	background: url("../../src/assets/media/stage_blurred.jpg") no-repeat fixed center;
	background-size: cover;
}

.logo-stage {
	width: 5rem;
	margin-top: 2rem;
	margin-bottom: 3rem;
}

.p-stage {
	text-align: center;
}

@media (min-width: 768px) {
	.logo-stage {
		width: 8rem;
		margin-top: 3rem;
		margin-bottom: 5rem;
	}
}


</style>
