import React from 'react';
import { HashLink } from 'react-router-hash-link';
import classes from '../LogoName/LogoName.module.css';

const LogoName = () => {
	return (
		<h1 className={classes.head}>
			<HashLink smooth to="#">
				SAMAN ATASHI
			</HashLink>
		</h1>
	);
};

export default LogoName;
