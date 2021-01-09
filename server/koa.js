const Koa = require('koa');
const app = new Koa();

// 模拟数据
function random(min, max) {
	return Math.ceil(Math.random() * (max - min)) + min;
}

// 解决跨域
app.use(async (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', '*');
	ctx.set('Access-Control-Allow-Methods', '*');
	if (ctx.method === 'OPTIONS') {
		ctx.response.status = 200;
	} else {
		await next();
	}
});

// response
app.use(ctx => {
	if (ctx.request.path === '/') {
		ctx.response.body = 'Hello World';
	}

	if (ctx.request.path === '/login') {
		ctx.response.type = 'json';
		ctx.response.body = {token: 'xxx'};
	}

	if (ctx.request.path === '/register') {
		ctx.response.type = 'json';
		ctx.response.body = {
			username: random(10000000000, 20000000000),
			password: random(10000000000, 20000000000),
		};
	}

	if (ctx.request.path === '/user') {
		ctx.response.type = 'json';
		ctx.response.body = {
			user: {username: random(10000000000, 20000000000)}
		};
	}
});

app.listen(8080);
