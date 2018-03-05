
const initRenders = require('../renders/initRenders');
const Praise = require('../models/praise');

const initController = {
	init(app, router) {
		router
			.get(['/', '/index'], async (ctx, next) => { 
				
				// var filters = {
				// 	formatVersion: function (version) {
				// 		return '@V' + version;
				// 	}
				// };
				// var renderData = {
				// 	title: 'Praise Button',
				// 	version: '2.0'
				// };

				// app.context.render = co.wrap(render({
				// 	writeBody: false,
				// 	filters: filters
				// }));

				ctx.body = await initRenders.init(app, ctx);
			})
			.get('/index/index', async (ctx, next) => {
				await (new Praise(ctx)).getCount();

			})
			.post('/index/index', async (ctx, next) => {
				await (new Praise(ctx)).postPraise();
			});

		app
			.use(router.routes())
			.use(router.allowedMethods());
	}
}

module.exports = initController;