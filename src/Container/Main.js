import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import smoothScrollPolyfill from 'smoothscroll-polyfill';

import About from '../Components/About/About';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import GlassLinks from './GlassLinks/GlassLinks';

smoothScrollPolyfill.polyfill();
class Main extends React.Component {
	render() {
		return (
			<Router>
				<Navbar />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route
							exact
							path="/About"
							component={About}
						/>
						<Route render={() => <Redirect to="/" />} />
					</Switch>
					{/* <Home />
					<About /> */}
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
