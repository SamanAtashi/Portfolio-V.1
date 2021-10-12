import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import smoothScrollPolyfill from 'smoothscroll-polyfill';

import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
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
			<Contact />
		</>
	) : (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/About" component={About} />
			<Route exact path="/Projects" component={Projects} />
			<Route exact path="/Contact" component={Contact} />
			<Route render={() => <Redirect to="/" />} />
		</Switch>
	);

	return (
		<Router>
			<Navbar />
			<main>{right}</main>
			<Footer />
			<GlassLinks />
		</Router>
	);
};

export default Main;
