export default {
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth-next'
	],
	auth: {
		redirect: {
			login: '/'
		},
		strategies: {
			local: {
				endpoints: {
					login: {url: 'http://localhost:8080/login', method: 'post'},
					user: {url: 'http://localhost:8080/user', method: 'get'}
				}
			}
		}
	}
}