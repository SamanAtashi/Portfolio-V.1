import React from 'react';
import styled from 'styled-components';
import classes from './BackDrop.module.css';

const Div = styled.div`
	${(props) =>
		props.active
			? `
background:blue;
	animation-name: zoomIn;
	animation-duration: 0.3s;
	animation-timing-function: linear;
	animation-fill-mode: forwards;
`
			: `
background:yellow;
	animation-name: zoomOut;
	animation-duration: 0.3s;
	animation-timing-function: linear;
	animation-fill-mode: forwards;

`}

	@keyframes zoomIn {

		0% {
			width: 0;
			height: 0;
		}

		10% {
			width: 25vw;
			height: 25vh;
		}

		50% {
			width: 50vw;
			height: 50vh;
		}

		100% {
			width: 95vw;
			height: 95vh;
		}
	}

	@keyframes zoomOut {
		0% {
			width: 95vw;
			height: 95vh;
		}
		50% {
			width: 50vw;
			height: 50vh;
		}
		90% {
			width: 25vw;
			height: 25vh;
		}
		100% {
			width: 0;
			height: 0;
		}
	}
`;

const BackDrop = (props) => {
	return <Div className={classes.backDrop} active={props.show} />;

};

export default BackDrop;
