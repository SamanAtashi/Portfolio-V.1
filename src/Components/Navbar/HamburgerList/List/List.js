import React from 'react';
import styled from 'styled-components';
import classes from './List.module.css';

const UL = styled.ul`
	display: none;

	${(props) =>
		props.active
			? `
display: flex;
z-index:30;
position: fixed;
    left: 50%;
    top: 50%;
transition: all 500ms ease-in-out;
transform: translate(-50%, -50%);
flex-direction:column;
color:#1f454e;
`
			: `
display: none;
`}

	@media only screen and (min-width: 768px) {
		display: flex;
	}
`;

const List = (props) => {
	return (
		<UL active={props.show}>
			<li className={classes.list_item}>Home</li>
			<li className={classes.list_item}>About</li>
			<li className={classes.list_item}>Projects</li>
			<li className={classes.list_item}>Contact</li>
		</UL>
	);
};

export default List;
