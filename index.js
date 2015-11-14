'use strict';

require('babel-core/register')({
    presets: ['es2015', 'react']
});


var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 5000 });

server.register(require('inert'), function (err) {
	if (err) {
        throw err;
    }

	server.route(require('./routes/index'));

	server.route({
        method: 'GET',
        path: '/dist/bundle.js',
        handler: function (request, reply) {
            reply.file('dist/bundle.js');
        }
    });
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});