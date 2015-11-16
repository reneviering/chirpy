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
let _socket = null;
io.on('connection', (socket) => {
    if(_socket === null) {
        _socket = socket;
        twitterApi.init(socket, 'JavaScript, ES2015, #gittower, reactjs, #reactjs, #reactnative, #babel, nodejs, #nodejs, #bower, #npm, @sketchapp, Bootstrap');    
    }
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
        path: '/dist/main.css',
        handler: function (request, reply) {
            reply.file('dist/main.css');
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