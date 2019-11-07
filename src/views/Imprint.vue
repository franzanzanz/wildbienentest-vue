<template>
	<div class="container-fluid">
		<div class="alert-danger">
			Imprint Screen
		</div>
		<button
			class="btn btn-primary mt-4 mr-4"
			@click="$emit('showSurvey')"
		>
			go to survey
		</button>
		<button
			class="btn btn-primary mt-4"
			@click="$emit('showStart')"
		>
			back to start
		</button>
	</div>
</template>

<script>
export default {
	name: 'Imprint',
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
$color: red;

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
