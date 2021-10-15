import React, { useEffect, useState } from 'react';
import Resume from '../Content/Resume/Resume';
import classes from './Home.module.css';
const Home = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth > 767);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => {
				const ismobile = window.innerWidth > 767;
				if (ismobile !== isMobile) setIsMobile(ismobile);
			},
			false

		);
	}, [isMobile]);

	const right = isMobile ? <Resume /> : null;
	return (
		<section className={classes.home} id="#">
			<article>
				<header className={classes.head}>
					Hi there, <span>I'm Saman!</span>
				</header>
				<p className={classes.content}>
					I'm a <span>Full-Stack developer</span> who loves
					solving everyday life's problems with code. I love
					things simple and organized.
				</p>
			</article>
			{right}
		</section>
	);
};

export default Home;
