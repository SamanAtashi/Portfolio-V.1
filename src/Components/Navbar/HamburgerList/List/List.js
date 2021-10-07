import React from 'react';
// import styled from 'styled-components';
import classes from './List.module.css';
import { useSelector } from 'react-redux';

import { HashLink } from 'react-router-hash-link';

// const UL = styled.ul`
// 	display: none;

// 	${(props) =>
// 		props.active
// 			? `
//     display: flex;
//     z-index:30;
//     position: fixed;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     flex-direction:column;

// `
// 			: `

// `}

// 	@media only screen and (min-width: 768px) {
// 		display: flex;
// 	}
// `;

const List = (props) => {
	const show = useSelector((state) => state.show);
	return (
		<ul
			className={`${classes.list} ${
				show ? classes.listYes : classes.listNo
			}`}
		>
			<li className={classes.list_item}>
				<HashLink smooth to="/">
					Home
				</HashLink>
			</li>
			<li className={classes.list_item}>
				<HashLink smooth to="/About">
					About
				</HashLink>
			</li>
			<li className={classes.list_item}>
				<HashLink smooth to="/About#middle">
					middle
				</HashLink>
			</li>
			<li className={classes.list_item}>Projects</li>
			<li className={classes.list_item}>Contact</li>
		</ul>
	);
};

export default List;
