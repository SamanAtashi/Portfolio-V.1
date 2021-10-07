import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../Components/About/About';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import GlassLinks from './GlassLinks/GlassLinks';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Navbar />
				<main>
					<Switch>
						<Route path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
					</Switch>
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
			</Router>
		);
	}
}

export default Main;
