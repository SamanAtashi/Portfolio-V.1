import React from 'react';
import LogoName from './LogoName/LogoName';
import HamburgerList from './HamburgerList/HamburgerList';
import Resume from "../Content/Resume/Resume";
import './Navbar.module.css';

const Navbar = () => {
	return (
		<nav>
			<LogoName />
			<Resume/>
			<HamburgerList />
		</nav>
	);
};

export default Navbar;
