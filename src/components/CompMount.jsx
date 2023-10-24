import React, { Component } from "react";

// Order is
// 1. born
// 2. render - creates the html
// 3. mount - html in the dom
// 4. update - if component is updated
// 5. unmount - if component is being destroyed

export default class CompMount extends Component {
	constructor(props) {
		// no loger need construction
		super();
		// Component is born
	}

	componentDidMount() {
		// Component is Mounted, content is now in the DOM
	}

	componentDidUpdate() {
		// Component is updated
	}

	componentWillUnmount() {
		// Component is about to die / unmount
	}

	render() {
		// Render method ran
		return <div>CompMount</div>;
	}
}
