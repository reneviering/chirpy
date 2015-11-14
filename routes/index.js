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
		var html = "<html><body><div id='content'>"+renderedComponent+"</div><script src='dist/bundle.js'></script></body></html>";
		reply(html);
	}
};