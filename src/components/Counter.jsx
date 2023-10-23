import React, { Component } from "react";

class Counter extends Component {
	state = { count: 0, countNum: 0 };

	add = () => {
		this.setState({
			count: this.state.count + 1,
		});
		this.count();
	};

	sub = () => {
		this.setState({
			count: this.state.count - 1,
		});
		this.count();
	};

	reset = () => {
		this.setState({ count: 0, countNum: 0 });
	};

	count = () => {
		this.setState({
			countNum: this.state.countNum + 1,
		});
	};

	render() {
		return (
			<div className="counter-container">
				<h4>This is the Counter Component</h4>
				<p>Counter: {this.state.count}</p>
				<button onClick={this.add}>+</button>
				<button onClick={this.sub}>-</button>
				<p>Number of time clicked: {this.state.countNum}</p>
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

export default Counter;
