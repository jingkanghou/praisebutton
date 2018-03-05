
const rp = require('request-promise');

class Praise {
	constructor(ctx) {
		this.ctx = ctx;
	}

	async getCount() {
		console.log('getcount');
		const options = {
			uri: 'http://localhost/praise-button2.1/service/controller/praise.php',
			json: true
		};

		await rp(options)
			.then( (repos) => {
				console.log('getcount-then');
				this.ctx.body = repos;
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	async postPraise() {
		const options = {
			method: 'POST',
			uri: 'http://localhost/praise-button2.1/service/controller/praise.php',
			json: true
		};
		await rp(options)
			.then((repos) => {
				this.ctx.body = repos;
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

module.exports = Praise;