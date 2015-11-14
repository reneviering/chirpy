'use strict';

let React = require('react');

let Chirpy = React.createClass({
	getInitialState() {
		return {counter:0};
	},

	onClick() {
		this.setState({counter: ++this.state.counter});
	},

	render() {
		return <div onClick={this.onClick}>Click, me and i count up! (Current counter: {this.state.counter})</div>;
	}
});

module.exports = Chirpy;

