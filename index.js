'use strict';

require('babel-core/register')({
    presets: ['es2015', 'react']
});

require('dotenv').load();

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 5000 });

let twitterApi = require('./twitterApi/twitter.js');
var io = require('socket.io')(server.listener);
io.on('connection', (socket) => {
    twitterApi.init(socket, 'JavaScript, ES2015, #gittower, reactjs, #reactjs, #reactnative, #babel, nodejs, #nodejs, #bower, bower, #npm');
});


server.register(require('inert'), function (err) {
	if (err) {
        throw err;
    }

	server.route(require('./routes/index'));
    server.route(require('./routes/show')(server));

	server.route({
        method: 'GET',
        path: '/dist/bundle.js',
        handler: function (request, reply) {
            reply.file('dist/bundle.js');
        }
    });

    server.route({
        method: 'GET',
        path: '/node_modules/bootstrap/dist/css/bootstrap.min.css',
        handler: function (request, reply) {
            reply.file('./node_modules/bootstrap/dist/css/bootstrap.min.css');
        }
    });


});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});