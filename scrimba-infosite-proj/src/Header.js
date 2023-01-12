import React from "react";

export default function Header() {
	return (
		<header className="header">
			<nav className="navbar">
				<img
					className="reactlogo"
					src="./react-logo.png"
					alt="react logo"
				></img>
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
