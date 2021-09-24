import React from 'react';
import Hamburger from './Hamburger/Hamburger';
import List from './List/List';

import './HamburgerList.module.css';

class HamburgerList extends React.Component {
	render() {
		return (
			<>
				<Hamburger />
				<List />
			</>
		);
	}
}
export default HamburgerList;
