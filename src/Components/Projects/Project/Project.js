import React from 'react';
import styled from 'styled-components';
import classes from './Project.module.css';

const Article = styled.article`
	position: relative;
`;

const Description = styled.div`
	display: none;
	${Article}:hover & {
		border-radius: 1.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: center;
		vertical-align: middle;
		color: var(--main-2-color);
		background: var(--main-3-color);
		z-index: 9;
	}
`;

const Project = (props) => {
	return (
		<Article className={classes.container}>
			<header>{props.name}</header>
			<Description className={classes.scaleIn}>
				<p>
					{props.status === 'Coming Soon...'
						? 'Coming Soon...'
						: props.desc}
				</p>
			</Description>
			<div className={classes.img}>
				{props.status === 'Coming Soon...' ? (
					<p>Coming Soon...</p>
				) : (
					<img alt={props.name} />
				)}
			</div>
		</Article>
	);
};

export default Project;
