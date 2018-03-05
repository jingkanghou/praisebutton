
const path = require('path');

const Config = new Map();
Config.set('port',3000);
Config.set('staticDir',path.join(__dirname,'..','public'));
//Config.set('viewsDir',path.join(__dirname,'..','views'));

module.exports = Config;