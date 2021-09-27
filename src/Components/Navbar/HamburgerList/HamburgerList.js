import React from 'react';
import Hamburger from './Hamburger/Hamburger';
import List from './List/List';

import './HamburgerList.module.css';
import BackDrop from './BackDrop/BackDrop';

class HamburgerList extends React.Component {
	state = {
		showList: false,
	};

	hamOpenHandler = () => {
		this.setState((preState) => {
			return { showList: !preState.showList };
		});
		console.log(this.state.showList);
	};

	render() {
		return (
			<>
				<Hamburger
					openHandler={this.hamOpenHandler}
					showList={this.state.showList}
				/>
				<List />
				<BackDrop show={this.state.showList} />
			</>
		);
	}
}
export default HamburgerList;
