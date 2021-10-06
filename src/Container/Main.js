import React from 'react';
import About from '../Components/About/About';
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
					<About />
				</main>
				<footer
					style={{
						marginTop: '2rem',
						borderTop: '1px solid red',
					}}
				>
					all the rights reserved
				</footer>
				<GlassLinks />
			</>
		);
	}
}

export default Main;
