<template>
  <div class="example">
    <h1>This is an example page</h1>
	<div>
		<h2 v-for="(user, id) in users" :key="id">{{ user.username }} : {{ user.password }}</h2>
	</div>
	<form action="#" @submit.prevent="addUser">
		<input type="text" name="username" id="username" v-model="username">
		<input type="password" name="password" id="password" v-model="password">
		<button type="submit">Add user</button>
	</form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Example',
	data() {
		return {
			users: {},
			username: '',
			password: ''
		}
	},
	mounted() {
		this.getUsers();
	},
	methods: {
		addUser() {
			var instance = this;
			axios.post('/api/users', {
				username: instance.username,
				password: instance.password
			}).then((response) => {
				instance.username = '';
				instance.password = '';
				instance.getUsers();
			});
		},
		getUsers() {
			var instance = this;
			axios.get('/api/users').then((response) => {
				instance.users = response.data;
			});
		}
	}
}
</script>