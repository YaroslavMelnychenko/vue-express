<template>
  <div class="users">
    <h1>This is an example page</h1>
	<div>
		<div class="users__user" v-for="(user, id) in users" :key="id">
			<div class="users__user-data">First Name: <small>{{ user.firstName }}</small></div>
			<div class="users__user-data">Last Name: <small>{{ user.lastName }}</small></div>
			<div class="users__user-data">Username: <small>{{ user.username }}</small></div>
			<div class="users__user-data">Password: <small>{{ user.password }}</small></div>
		</div>
	</div>
	<h2>Add user</h2>
	<form class="users__form" action="#" @submit.prevent="addUser">
		<input type="text" name="firstName" id="firstName" v-model="firstName" placeholder="First Name"><br><br>
		<input type="text" name="lastName" id="lastName" v-model="lastName" placeholder="Last Name"><br><br>
		<input type="text" name="username" id="username" v-model="username" placeholder="Username"><br><br>
		<input type="password" name="password" id="password" v-model="password" placeholder="Password"><br><br>
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
			firstName: '',
			lastName: '',
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
				firstName: instance.firstName,
				lastName: instance.lastName,
				username: instance.username,
				password: instance.password
			}).then((response) => {
				console.log(response);
				instance.username = '';
				instance.password = '';
				instance.firstName = '';
				instance.lastName = '';
				instance.getUsers();
			});
		},
		getUsers() {
			var instance = this;
			axios.get('/api/users').then((response) => {
				console.log(response);
				instance.users = response.data;
			});
		}
	}
}
</script>

<style lang="sass">
.users
	&__user
		width: 600px
		margin: 0 auto
		margin-bottom: 30px

		&-data
			text-align: left	
</style>