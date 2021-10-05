import React from 'react';
import classes from './Resume.module.css';

const Resume = () => {
	return (
		// <button className={`${classes.gradientBorder} ${classes.btn}`}>
		<button className={classes.horizontal}>
			<span className={classes.text}>Resume</span>
		</button>
	);
};

export default Resume;
