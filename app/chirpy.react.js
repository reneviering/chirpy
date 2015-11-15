'use strict';
let React = require('react');

let Chirpy = React.createClass({
	getInitialState() {
		return {counter:0, tweets: []};
	},

	componentDidMount() {
		let socket = io();
		socket.on('tweet', (tweet) => {
			let newTweets = this.state.tweets;
			newTweets.push(tweet);
			this.setState({tweets: newTweets});
		});
	},

	onClick() {
		this.setState({counter: ++this.state.counter});
	},

	render() {
		let tweets = this.state.tweets.map((tweet ,index) => {

			let images = null;
			if(tweet.entities && 
			   tweet.entities.media &&
			   tweet.entities.media.length > 0) {
			   images = tweet.entities.media.map((media) => {
			   	if(media.type === 'video') { console.log(tweet, 'video');}
			   		return <img src={media.media_url}/>;
			   	
			   });
			}

			let twitterUrl = "http://twitter.com/" + tweet.user.name + "/status/" + tweet.id_str;
			return <p key={index}>{tweet.text} <a href={twitterUrl}>zum Tweet</a> <br/> {images}</p>;
		});

		return <div>
			<h1>Isomorphic React 4theWin!!!</h1>
			<p onClick={this.onClick}>Click, me and i count up! (Current counter: {this.state.counter})</p>
			<div>
				<h1>Tweets:</h1>
				{tweets}
			</div>
		</div>;
	}
});

module.exports = Chirpy;

