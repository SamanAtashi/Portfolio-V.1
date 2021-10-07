import React, { useEffect, useState } from 'react';
import Resume from '../Content/Resume/Resume';
import classes from './Home.module.css';
const Home = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth > 768);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => {
				const ismobile = window.innerWidth > 768;
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
					I'm Saman Atashi
				</header>
				<p className={classes.content}>
					Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of
					type and scrambled it to make a type specimen
					book. It has survived not only five centuries, but
					also the leap into electronic typesetting,
					remaining essentially unchanged. It was
					popularised in the 1960s with the release of
					Letraset sheets containing Lorem Ipsum passages,
					and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem
					Ipsum.
				</p>
			</article>
			{right}
		</section>
	);
};

export default Home;
