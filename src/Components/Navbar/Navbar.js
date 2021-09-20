import React from 'react';
import LogoName from './LogoName/LogoName';

const Navbar = (props) => {
	return (
		<nav>
			<LogoName />
			<button>Resume</button>
			<ul>hamburger/list of items</ul>
		</nav>
	);
};

export default Navbar;
