'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 5000 });



server.register(require('inert'), function (err) {
	if (err) {
        throw err;
    }
    
	server.route(require('./routes/index'));
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});