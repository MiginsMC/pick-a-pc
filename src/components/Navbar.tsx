import '../styles/index.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	// Logo - Home, Find, Quiz, Help
	return (
		<div className="navbar">
			<ul className="nav">
				<nav></nav>
				<li>
					<Link to="/faq">FAQ</Link>
				</li>
				<li>
					<Link to="/quiz">QUIZ</Link>
				</li>
				<li>
					<Link to="/find">FIND</Link>
				</li>
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li className="logo">
					<Link to="/">
						<img src="/mainLogo.png" alt="Logo" />
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
