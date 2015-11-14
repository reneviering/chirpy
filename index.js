'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 5000 });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello, chirpy!');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});