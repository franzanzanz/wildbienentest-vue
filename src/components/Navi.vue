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
			class="navipanel-wrapper"
			:class="{'open': naviOpen}"
		>
			<div
				class="navipanel"
			>
				<div class="navilinks">
					<ul>
						<li>
							<router-link
								to="/#home-top"
								@click.native="anchorlinkNavi('#home-top')"
							>
								Home
							</router-link>
						</li>
						<ul class="mb-2 mb-sm-4">
							<li>
								<router-link
									to="/#home-intro"
									@click.native="anchorlinkNavi('#home-intro')"
								>
									Intro
								</router-link>
							</li>
							<li>
								<router-link
									to="/#home-tipps"
									@click.native="anchorlinkNavi('#home-tipps')"
								>
									Pflanztipps
								</router-link>
							</li>
							<li>
								<router-link
									to="/#home-about"
									@click.native="anchorlinkNavi('#home-about')"
								>
									Über das Projekt
								</router-link>
							</li>
							<li>
								<router-link
									to="/#home-team"
									@click.native="anchorlinkNavi('#home-team')"
								>
									Projekt-Team
								</router-link>
							</li>
						</ul>
						<li>
							<router-link
								to="/survey"
								@click.native="togglNav"
							>
								Test starten
							</router-link>
						</li>
						<li class="multiline-navilink">
							<router-link
								to="/imprint"
								@click.native="togglNav"
							>
								Datenschutz/<br>Impressum
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { methodMixin } from '../methodMixin';

export default {
	name: 'Navi',
	mixins: [methodMixin],
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
		anchorlinkNavi(hashbang) {
			this.scrollFix(hashbang);
			this.togglNav();
		},

		togglNav() {
			this.naviOpen = !this.naviOpen;
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
		top: 2rem;
		right: 2rem;
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
	.navipanel-wrapper {
		position: fixed;
		top: 0;
		right: -30rem;
		filter: drop-shadow(-1px 6px 3px $bt-shadow-color);
		z-index: 1000;
		visibility: hidden;
		opacity: 0;
		transition: visibility $transitions-basic, right $transitions-basic, opacity $transitions-basic linear;
		&.open {
			right: 0;
			opacity: .9;
			visibility: visible;
		}

		.navipanel {
			width: 27rem;
			height: 100vh;
			background-color: $bt-white;
			clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
		}
	}

	.navilinks {
		position: relative;
		top: 5rem;
		right: 4.5rem;
	}

	ul {
		list-style-type: none;
		font-size: 2rem;
		font-weight: 200;
		line-height: 3rem;
		text-align: right;
		ul {
			margin-left: -1.5rem;
			font-size: 1.5rem;
			line-height: 2.5rem;
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

	@media (min-width: 768px) {
		#beenav-hamburger {
			top: 4rem;
			right: 4rem;
		}

		.navilinks {
			top: 10rem;
			right: 7rem;
		}

		ul {
			line-height: 4rem;
			ul {
				line-height: 3rem;
			}
		}
	}
</style>
