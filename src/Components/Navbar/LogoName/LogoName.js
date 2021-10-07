import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../LogoName/LogoName.module.css';

const LogoName = () => {
	return (
		<h1>
			<HashLink smooth to="/">
				SAMAN ATASHI
			</HashLink>
		</h1>
	);
};

export default LogoName;
