import React from 'react';
import classes from './About.module.css';

const About = () => {
	return (
		<section className={classes.container} id="About">
			<article className={classes.about_text}>
				<p>
					Studied medicine for four years, problem-solver,
					energetic, from Iran, based in Russia.{' '}
				</p>
				<p className={classes.space}>
					On my journey to hone my skills and build a less
					complex world.
				</p>
			</article>
			<article className={classes.skills}>
				<header>Skills</header>
				<ul>
					<li>FrontEnd development</li>
					<li>BackEnd development</li>
					<li>JavaScript</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</article>
			<article className={classes.exp}>
				<header>Experiences & Education</header>
				<ul>
					<li>
						Microverse - Student - [march,2021-present]
					</li>
				</ul>
			</article>
		</section>
	);
};

export default About;
