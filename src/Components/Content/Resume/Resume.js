import React from 'react';
import classes from './Resume.module.css';
import resume from '../../../Assets/Resume/resume.pdf';

const Resume = () => {
	return (
		// <button className={`${classes.gradientBorder} ${classes.btn}`}>
		<button className={classes.horizontal}>
			<a href={resume} className={classes.text} download>
				Resume
			</a>
		</button>
	);
};

export default Resume;
