'use strict';

require('dotenv').load();

let Twit = require('twit');

let _searchTerm = "JavaScript";

let _init = (socket) => {
	let T = new Twit({
	    consumer_key: process.env.CONSUMER_KEY,
	  	consumer_secret: process.env.CONSUMER_SECRET,
		access_token: process.env.ACCESS_TOKEN,
		access_token_secret: process.env.ACCESS_TOKEN_SECRET
	});

	var stream = T.stream('statuses/filter', { track: _searchTerm });
	stream.on('tweet', function (tweet) {
		socket.broadcast.emit('tweet', tweet);
	});
};


module.exports = {
	init(sockets, searchTerm) {
		_searchTerm = searchTerm;
		_init(sockets);
	}
};