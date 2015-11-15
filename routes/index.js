'use strict';

var React = require('react');
var ReactDOM = require('react-dom/server');
var ChirpyComponent = require('../app/chirpy.react.js');

var Chirpy = React.createFactory(ChirpyComponent);

module.exports = {
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		let renderedComponent = ReactDOM.renderToString(Chirpy({ name: "John" }));
		var html = [
		"<!DOCTYPE html>",
		"<html>",
		"<head>",
		"	<title>rv-chirpy</title>",
		"	<link rel='stylesheet' href='node_modules/bootstrap/dist/css/bootstrap.min.css' />",
		"	<link href='https://fonts.googleapis.com/css?family=Raleway:300' rel='stylesheet' type='text/css'>",
		"	<link rel='stylesheet' href='dist/main.css' />",
		"</head>",
		"<body>",
		"	<div id='content'>",
		"		<div>",
					renderedComponent,
		"		</div>",		
		"	</div>",
		"	<script src='https://cdn.socket.io/socket.io-1.3.7.js'></script>",
		"	<script src='dist/bundle.js'></script>",
		"</body>",
		"</html>"
		].join("\n"); 

		reply(html);
	}
};