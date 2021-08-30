import './styles/index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './components/icons/mainLogo.png';

function Navbar() {
	// Logo - Home, Find, Quiz, Help
	return (
		<div className="navbar">
			<ul className="nav">
				<nav></nav>
				<li>
					<Link to="/help">FAQ</Link>
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
						<img src={logo} width="50" height="50" alt="Logo" />
						{
							// TODO: Move logo into public, then src='/mainLogo.png' 
						}
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
