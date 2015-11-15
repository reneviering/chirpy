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
			return <img className='tweet__image' src={mediaItem.media_url}/>;
		});
	},

	getTwitterUrl() {
		return "http://twitter.com/" + this.props.tweetData.user.name + "/status/" + this.props.tweetData.id_str;	
	},

	render() {
		let maybeImage = this.getImages();
		
		let twitterUserUrl = 'http://twitter.com/' + this.props.tweetData.user.screen_name;	

		return <div className='tweet row'>
			<div className='col-xs-3'>
				<img className='tweet__userImage' src={this.props.tweetData.user.profile_image_url} />
				<br/>
				<a href={twitterUserUrl}>@{this.props.tweetData.user.screen_name}</a>
			</div>
			<div className='col-xs-9'>
				<p className='tweet__text'>{this.props.tweetData.text}</p>
				<div>{this.getImages()}</div>
				<a className='tweet__url' href={this.getTwitterUrl()} target='_blank'>View on twitter</a>
			</div>
		</div>;
	}
});

module.exports = Tweet;