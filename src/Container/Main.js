import React from 'react';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
	return (
		<>
			<Navbar />
			<main>
				<Home />
			</main>
			<footer>all the rights reserved</footer>
		</>
	);
};

export default Main;
