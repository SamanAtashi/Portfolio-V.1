import React from 'react';
import LogoName from './LogoName/LogoName';
import HamburgerList from './HamburgerList/HamburgerList';
import Resume from '../Content/Resume/Resume';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<LogoName />
			<div className={classes.list}>
				<Resume />
				<HamburgerList />
			</div>
		</nav>
	);
};

export default Navbar;
