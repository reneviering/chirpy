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
			console.log(tweet);
			let newTweets = this.state.tweets;
			newTweets.unshift(tweet);
			this.setState({tweets: newTweets});
		});
	},

	render() {
		let tweets = this.state.tweets.map((tweetData ,index) => {			
			return <Tweet key={index} tweetData={tweetData}/>
		});

		return <div className='container'>
			<h1>Chirpy</h1>
			<h4>(Twitter Streaming-API playground by <a href='http://twitter.com/rvrng' target='_blank'>@rvrng</a>)</h4>
			{tweets}
		</div>;
	}
});

module.exports = Chirpy;

