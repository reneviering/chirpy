'use strict';

let React = require('react');
let Tweet = require('./tweet.react.js');


let Chirpy = React.createClass({
	getInitialState() {
		return {tweets: []};
	},

	componentDidMount() {
		let socket = io();
		socket.on('tweet', (tweet) => {
			let newTweets = this.state.tweets;
			newTweets.push(tweet);
			this.setState({tweets: newTweets});
		});
	},

	render() {
		let tweets = this.state.tweets.map((tweetData ,index) => {			
			return <Tweet key={index} tweetData={tweetData}/>
		});

		return <div>
			<h1>Tweets:</h1>
			{tweets}
		</div>;
	}
});

module.exports = Chirpy;

