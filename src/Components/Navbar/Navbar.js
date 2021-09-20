import React from 'react';
import LogoName from './LogoName/LogoName';
import HamburgerList from './HamburgerList/HamburgerList';
import './Navbar.module.css';

const Navbar = (props) => {
	return (
		<nav>
			<LogoName />
			<button>Resume</button>
			<HamburgerList />
		</nav>
	);
};

export default Navbar;
