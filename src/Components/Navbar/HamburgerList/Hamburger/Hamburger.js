import React from 'react';
import classes from './Hamburger.module.css';
import store from '../../../../Store/store.js';
import { SHOWLIST } from '../../../../Store/portfolio.js';
import { useSelector } from 'react-redux';

const Hamburger = () => {
	const showList_state = useSelector((state) => state.showList);

	const hamOpenHandler = () => {
		store.dispatch({
			type: SHOWLIST,
			payload: {
				showList: store.getState().showList,
			},
		});
	};

	return (
		<div
			onClick={hamOpenHandler}
			className={
				showList_state
					? classes.menu + ' ' + classes.active
					: classes.menu
			}
		>
			<button
				className={classes.nav_tgl}
				type="button"
				aria-label="toggle menu"
			>
				<span aria-hidden="true"></span>
			</button>
			<div className={classes.nav}></div>
		</div>
	);
};

export default Hamburger;

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
// inside component
// <label
// 	htmlFor="check"
// 	className={classes.body}
// 	onClick={props.openHandler}
// >
// 	<Span active={props.showList} />
// 	<Span active={props.showList} />
// 	<Span active={props.showList} />
// </label>
