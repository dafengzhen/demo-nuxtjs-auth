<template>
	<div>
		<h2>Login</h2>
		<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
		<div id="id01" class="modal">
			<form class="modal-content animate">
				<div class="container">
					<label>
						<b>Username</b>
						<input type="text" v-model="username" placeholder="Enter Username" name="username" required>
					</label>
					<label>
						<b>Password</b>
						<input type="password" v-model="password" placeholder="Enter Password" name="password" required>
					</label>
					<button type="button" v-on:click="login">Login</button>
				</div>
				<div class="container" style="background-color:#f1f1f1">
					<button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
				</div>
			</form>
		</div>

		<h2>Register</h2>
		<button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Register</button>
		<div id="id02">
			<form class="modal-content animate">
				<div class="container">
					<label>
						<b>Username</b>
						<input type="text" v-model="username" placeholder="Enter Username" name="username" required>
					</label>
					<label>
						<b>Password</b>
						<input type="password" v-model="password" placeholder="Enter Password" name="password" required>
					</label>
					<button type="button" class="registerbtn" v-on:click="register">Register</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {

	data() {
		return {
			username: '',
			password: ''
		}
	},

	mounted() {
		const modal = document.getElementById('id01');
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
			}
		}
	},

	methods: {
		// 登录
		login() {

		},

		// 注册
		register() {

		}
	}
}
</script>

<style scoped>
body {
	font-family: Arial, Helvetica, sans-serif;
}

input[type=text], input[type=password] {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	box-sizing: border-box;
}

button {
	background-color: #4CAF50;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	cursor: pointer;
	width: 100%;
}

button:hover {
	opacity: 0.8;
}

.cancelbtn {
	width: auto;
	padding: 10px 18px;
	background-color: #f44336;
}

.container {
	padding: 16px;
}

.modal {
	display: none; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	padding-top: 60px;
}

.modal-content {
	background-color: #fefefe;
	margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
	border: 1px solid #888;
	width: 80%; /* Could be more or less, depending on screen size */
}

.animate {
	-webkit-animation: animatezoom 0.6s;
	animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
	from {
		-webkit-transform: scale(0)
	}
	to {
		-webkit-transform: scale(1)
	}
}

@keyframes animatezoom {
	from {
		transform: scale(0)
	}
	to {
		transform: scale(1)
	}
}

@media screen and (max-width: 300px) {
	.cancelbtn {
		width: 100%;
	}
}

.container {
	padding: 16px;
	background-color: white;
}

input[type=text], input[type=password] {
	width: 100%;
	padding: 15px;
	margin: 5px 0 22px 0;
	display: inline-block;
	border: none;
	background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
	background-color: #ddd;
	outline: none;
}

hr {
	border: 1px solid #f1f1f1;
	margin-bottom: 25px;
}

.registerbtn {
	background-color: #4CAF50;
	color: white;
	padding: 16px 20px;
	margin: 8px 0;
	border: none;
	cursor: pointer;
	width: 100%;
	opacity: 0.9;
}

.registerbtn:hover {
	opacity: 1;
}

a {
	color: dodgerblue;
}
</style>