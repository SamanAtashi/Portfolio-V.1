import React, { useEffect, useState } from 'react';
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
import Projects from '../Components/Projects/Projects';
import GlassLinks from './GlassLinks/GlassLinks';

smoothScrollPolyfill.polyfill();

const Main = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => {
				const ismobile = window.innerWidth < 768;
				if (ismobile !== isMobile) setIsMobile(ismobile);
			},
			false
		);
		return () => {
			setIsMobile(window.innerWidth < 768);
		};
	}, [isMobile]);

	const right = isMobile ? (
		<>
			<Home />
			<About />
			<Projects />
		</>
	) : (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/About" component={About} />
			<Route render={() => <Redirect to="/" />} />
		</Switch>
	);

	return (
		<Router>
			<Navbar />
			<main>{right}</main>
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
};

export default Main;
