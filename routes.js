"use strict";

exports.register = function (app, restify) {
    var c = app.controllers,
        server = restify.getServer();

    server.post('/', c.alexa.alexaPostRequest);
    server.get('/', c.alexa.alexaGetRequest);
};