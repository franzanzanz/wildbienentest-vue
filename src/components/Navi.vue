<template>
	<nav class="beenav">
		<div
			id="beenav-hamburger"
			:class="{'open': naviOpen}"
			@click="togglNav"
		>
			<span />
			<span />
			<span />
			<span />
		</div>
		<div
			class="navipanel"
			:class="{'open': naviOpen}"
		>
			<div class="navilinks">
				<ul>
					<li>
						<router-link to="/">
							Home
						</router-link>
					</li>
					<ul class="mb-4">
						<li>
							<a href="">Intro</a>
						</li>
						<li>
							<a href="">Pflanztipps</a>
						</li>
						<li>
							<a href="">Über das Projekt</a>
						</li>
						<li>
							<a href="">Team</a>
						</li>
					</ul>
					<li>
						<router-link to="/survey">
							Test starten
						</router-link>
					</li>
					<li class="multiline-navilink">
						<router-link to="/imprint">
							Datenschutz/<br>Impressum
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navi',
	props: {
		msg: {
			type: String,
			default: ''
		}
	},

	data() {
		return {
			naviOpen: false
		};
	},

	methods: {
		togglNav() {
			this.naviOpen = !this.naviOpen;
		},

		showImprint(e) {
			console.log(e);
			e.preventDefault();
			this.$emit('showImprint');
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../assets/sass/_colors.scss";
	@import "../assets/sass/_animations.scss";

	// NAVIGATION //
	#beenav-hamburger {
		width: 40px;
		height: 40px;
		position: fixed;
		top: 4rem;
		right: 4rem;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: $transitions-basic ease-in-out;
		-moz-transition: $transitions-basic ease-in-out;
		-o-transition: $transitions-basic ease-in-out;
		transition: $transitions-basic ease-in-out;
		cursor: pointer;
		z-index: 9000;

		span {
			display: block;
			position: absolute;
			height: 4px;
			width: 100%;
			background: black;
			border-radius: 4px;
			opacity: 1;
			left: 0;
			-webkit-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
			-webkit-transition: $transitions-basic ease-in-out;
			-moz-transition: $transitions-basic ease-in-out;
			-o-transition: $transitions-basic ease-in-out;
			transition: $transitions-basic ease-in-out;
		}

	}

	#beenav-hamburger span:nth-child(1) {
  	top: 0px;
	}

	#beenav-hamburger span:nth-child(2),#beenav-hamburger span:nth-child(3) {
		top: 13px;
	}

	#beenav-hamburger span:nth-child(4) {
		top: 26px;
	}

	#beenav-hamburger.open span:nth-child(1) {
		top: 13px;
		width: 0%;
		left: 50%;
	}

	#beenav-hamburger.open span:nth-child(2) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	#beenav-hamburger.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}

	#beenav-hamburger.open span:nth-child(4) {
		top: 13px;
		width: 0%;
		left: 50%;
	}

	.navipanel {
		position: fixed;
		top: 0;
		// right: 0;
		right: -30rem;
		width: 27rem;
		height: 100vh;
		background-color: $bt-yellow-ultralight;
		visibility: hidden;
		opacity: 0;
		clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
		transition: visibility $transitions-basic, right $transitions-basic, opacity $transitions-basic linear;
		// transition: right $transitions-basic linear;
		z-index: 1000;
		&.open {
			right: 0;
			opacity: .9;
			visibility: visible;
		}
	}

	.navilinks {
		position: relative;
		top: 10rem;
		right: 7rem;
	}

	ul {
		list-style-type: none;
		font-size: 2rem;
		font-weight: 200;
		line-height: 4rem;
		text-align: right;
		ul {
			margin-left: -1.5rem;
			font-size: 1.5rem;
			line-height: 3rem;
		}
		a {
			color: black;
			transition: color $transitions-basic;
			&:hover {
				color: $bt-red;
				text-decoration: none;
			}
			&.active {
				font-weight: 700;
				color: $bt-red;
			}
		}
		.multiline-navilink {
			margin-top: 1rem;
			line-height: 2.5rem;
		}
	}
</style>
