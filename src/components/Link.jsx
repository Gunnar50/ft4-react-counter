import React, { Component } from "react";

export default class Link extends Component {
	render() {
		return (
			<li>
				<a href={this.props.link}>{this.props.name}</a>
			</li>
		);
	}
}
