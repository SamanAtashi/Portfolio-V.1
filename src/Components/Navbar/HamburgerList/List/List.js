import React from 'react';
// import styled from 'styled-components';
import classes from './List.module.css';
import { useSelector } from 'react-redux';
import store from '../../../../Store/store';
import { SHOW } from '../../../../Store/portfolio';
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

	const clickedHandler = () => {
		store.dispatch({
			type: SHOW,
			payload: {
				show: store.getState().show,
			},
		});
		console.log(show);
	};

	return (
		<ul
			className={`${classes.list} ${
				show ? classes.listYes : classes.listNo
			}`}
		>
			<li className={classes.list_item} onClick={clickedHandler}>
				<HashLink smooth to="#" className={classes.link_item}>
					Home
				</HashLink>
			</li>
			<li className={classes.list_item} onClick={clickedHandler}>
				<HashLink
					smooth
					to="#About"
					className={classes.link_item}
				>
					About
				</HashLink>
			</li>
			<li className={classes.list_item} onClick={clickedHandler}>
				<HashLink
					smooth
					to="#middle"
					className={classes.link_item}
				>
					middle
				</HashLink>
			</li>
			<li className={classes.list_item} onClick={clickedHandler}>
				<HashLink
					smooth
					to="#Projects"
					className={classes.link_item}
				>
					Projects
				</HashLink>
			</li>
			<li className={classes.list_item} onClick={clickedHandler}>
				<HashLink
					smooth
					to="#Contact"
					className={classes.link_item}
				>
					Contact
				</HashLink>
			</li>
		</ul>
	);
};

export default List;
