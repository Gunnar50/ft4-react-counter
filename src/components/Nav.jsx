import React, { Component } from "react";
import Link from "./Link";

const navLinks = [
	{ name: "Home", link: "/home" },
	{ name: "About", link: "/about" },
	{ name: "Contact", link: "/contact" },
];

export default class Nav extends Component {
	render() {
		return (
			<ul>
				{navLinks.map((e, i) => (
					<Link key={i} name={e.name} link={e.link} />
				))}
			</ul>
		);
	}
}
