import React from 'react';
import Hamburger from './Hamburger/Hamburger';
import List from './List/List';

import './HamburgerList.module.css';

class HamburgerList extends React.Component {
	state = {
		open: false,
	};

	openHandler = () => {
		this.setState((preOpen) => {
			console.log(preOpen);
			return { open: !preOpen };
		});
		console.log(this.state.open);
	};

	consol = () => {
		console.log(this.state.open);
	};

	render() {
		return (
			<>
				<Hamburger openHandler={this.openHandler} />
				<button onClick={this.consol}>console</button>
				<List />
			</>
		);
	}
}
export default HamburgerList;
