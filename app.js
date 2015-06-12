/*
 * server/app.js
 */

'use strict';

var util = require('util');

var _ = require('lodash');
var config = require(__dirname + '/config/dev.json');
var ultimateRequire = require(__dirname + '/lib/ultimate-require.js');

// Create an app
var app = {
  config: config,
  dir: __dirname,
  controllers : ultimateRequire(__dirname + "/controllers"),
  server: {}
};

// Assign app to exports
exports = module.exports = app;


// Run app.servers
app.run = function () {
  require(__dirname + '/lib/server/restify.js').run(app);
  require(__dirname + '/routes.js').register(app,app.server.restify);
};

process.on('uncaughtException',function(e){
  console.log(e, e.stack);
});
