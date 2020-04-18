<template>
  <div class="example">
    <h1>This is an example page</h1>
	<div>
		<h2 v-for="(value, key, id) in user" :key="id">{{ key }}: {{ value }}</h2>
	</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Example',
	data() {
		return {
			user: {}
		}
	},
	mounted() {
		var instance = this;
		axios.post('/api/users').then((response) => {
			instance.user = response.data;
		});
	}
}
</script>