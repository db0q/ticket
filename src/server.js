const { ExpressLoader } = require('./loaders/express.loader');
const { DatabaseLoader } = require('./loaders/database.loader');
const { RoutesLoader } = require('./loaders/routes.loader');
const { MiddlewareLoader } = require('./loaders/middleware.loader');
const { Config } = require('./configs/config');
var express = require('express');
// load express
const app = ExpressLoader.init();

// load database
DatabaseLoader.init();

// init routes
const version = "v1";
RoutesLoader.initRoutes(app, version);

// init middleware
MiddlewareLoader.init(app);

//var frontend = require('./public');
//app.use(backend);
//app.use(frontend);

// app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/data'));
// starting the server
const port = Number(Config.PORT);
app.listen(port, () => console.log(`
  ==================================
  🚀 Server running on port ${port}!🚀
  ==================================
`));

module.exports = app;