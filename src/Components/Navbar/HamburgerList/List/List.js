import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
	display: none;

	@media only screen and (min-width: 768px) {
		display: flex;
	}
`;

const List = (props) => {
	return (
		<UL>
			<li>Home</li>
			<li>About</li>
			<li>Projects</li>
			<li>Contact</li>
		</UL>
	);
};

export default List;
