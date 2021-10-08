import React from 'react';
import classes from './Project.module.css';

const Project = (props) => {
	return (
		<article className={classes.container}>
			<header>{props.name}</header>
			<div className={classes.img}></div>
		</article>
	);
};

export default Project;
