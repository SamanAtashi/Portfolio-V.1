import React from 'react';
import styled from 'styled-components';

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
transform: translate(-50%, -50%);
flex-direction:column;
color:white;
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
			<li>Home</li>
			<li>About</li>
			<li>Projects</li>
			<li>Contact</li>
		</UL>
	);
};

export default List;
