const Koa = require('koa');
const Router = require('koa-router');
const staticSvr = require('koa-static');
const path = require('path');
const initRouter = require('./controller/initController'); 
const config = require('./config/config'); 
const app =new Koa();
const router = new Router();

app.use(staticSvr(config.get('staticDir')));


initRouter.init(app, router);

module.exports = app;

app.listen(config.get('port'), function () {
  console.log('app is listening at port 3000');
});    

    