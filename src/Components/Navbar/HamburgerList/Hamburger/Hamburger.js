import React from 'react';
import classes from './Hamburger.module.css';
// import styled from 'styled-components';

// const Span = styled.span`
// 	${(props) =>
// 		props.active
// 			? `
// &:nth-of-type(1) {
//   transform-origin: bottom;
//   width: 50%;
//   transform: rotatez(45deg) translate(0.7rem);
// }

// &:nth-of-type(2) {
//   transform-origin: top;
//   transform: rotatez(-45deg);
//   width: 100%;
// }

// &:nth-of-type(3) {
//   transform-origin: bottom;
//   width: 50%;
//   transform: translate(2rem,-0.9rem) rotatez(45deg);
// }

// `
// 			: `
// &:nth-of-type(1) {
// 		width: 50%;
// 	}

// 	&:nth-of-type(2) {
// 		width: 100%;
// 	}

// 	&:nth-of-type(3) {
// 		width: 75%;
// 	}

// `}
// `;

const Hamburger = (props) => {
	return (
		// <label
		// 	htmlFor="check"
		// 	className={classes.body}
		// 	onClick={props.openHandler}
		// >
		// 	<Span active={props.showList} />
		// 	<Span active={props.showList} />
		// 	<Span active={props.showList} />
		// </label>
		<div
			onClick={props.openHandler}
			className={`${
				props.showList
					? classes.menu + ' ' + classes.active
					: classes.menu
			}`}
		>
			<button
				className={classes.nav_tgl}
				type="button"
				aria-label="toggle menu"
			>
				<span aria-hidden="true"></span>
			</button>
			<nav className={classes.nav}>
				<ul>
					<li>element one</li>
					<li>element two</li>
					<li>element three</li>
					<li>element four</li>
				</ul>
			</nav>
		</div>
	);
};

export default Hamburger;
