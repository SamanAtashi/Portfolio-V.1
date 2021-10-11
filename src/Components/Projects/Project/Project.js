import React from 'react';
import styled from 'styled-components';
import classes from './Project.module.css';

const Article = styled.article`
	position: relative;
`;

const Description = styled.p`
	display: none;
	${Article}:hover & {
		border-radius: 1.2rem;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: var(--main-1-color);
		background: var(--main-3-color);
	}
`;

const Project = (props) => {
	return (
		<Article className={classes.container}>
			<header>{props.name}</header>
			<Description className={classes.scaleIn}>
				{props.desc}
			</Description>
			<div className={classes.img}></div>
		</Article>
	);
};

export default Project;
