import React from 'react';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import GlassLinks from './GlassLinks/GlassLinks';

class Main extends React.Component {
	render() {
		return (
			<>
				<Navbar />
				<main>
					<Home />
					<GlassLinks />
				</main>
				<footer
					style={{
						marginTop: '2rem',
						borderTop: '1px solid red',
					}}
				>
					all the rights reserved
				</footer>
			</>
		);
	}
}

export default Main;
