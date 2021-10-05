import React, { useEffect, useState } from 'react';
import LogoName from './LogoName/LogoName';
import HamburgerList from './HamburgerList/HamburgerList';
import Resume from '../Content/Resume/Resume';
import classes from './Navbar.module.css';

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => {
				const ismobile = window.innerWidth < 768;
				if (ismobile !== isMobile) setIsMobile(ismobile);
			},
			false
		);
	}, [isMobile]);

	const right = isMobile ? <Resume /> : null;

	return (
		<nav className={classes.nav}>
			<LogoName />
			<div className={classes.list}>
				{right}
				<HamburgerList />
			</div>
		</nav>
	);
};

export default Navbar;
