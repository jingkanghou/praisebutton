const render = require('koa-swig');
const co = require('co');

const initRenders = {
    async init(app, ctx){
        var filters = {
            formatVersion: function (version) {
                return '@V' + version;
            }
        };
        var renderData = {
            title: 'Praise Button',
            version: '2.0'
        };

        app.context.render = co.wrap(render({
            writeBody: false,
            filters: filters
        }));
        return await ctx.render('index', renderData);
    }
}

module.exports = initRenders;