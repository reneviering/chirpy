'use strict';

let React = require('react');

let Tweet = React.createClass({
	getImages() {
		let data = this.props.tweetData;
		if(typeof data === 'undefined') return null;
		if(typeof data.entities === 'undefined') return null;
		if(typeof data.entities.media === 'undefined') return null;
		if(data.entities.media.length === 0) return null;


		return data.entities.media.map((mediaItem) => {
			return <img src={mediaItem.media_url}/>;
		});
	},

	getTwitterUrl() {
		return "http://twitter.com/" + this.props.tweetData.user.name + "/status/" + this.props.tweetData.id_str;	
	},

	render() {
		let maybeImage = this.getImages();
		return <div className='tweet'>
			<p className='tweet__text'>{this.props.tweetData.text}</p>
			{this.getImages()}
			<a className='tweet__url' href={this.getTwitterUrl()} target='_blank'>View on twitter</a>
		</div>;
	}
});

module.exports = Tweet;