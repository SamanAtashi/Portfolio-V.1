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
					On the journey to hone my skills and build a less
					complex world.
				</p>
			</article>
			<article className={classes.skills}>
				<header>Skills</header>
				<ul>
					<li>JavaScript</li>
					<li>React,Redux</li>
					<li>HTML,CSS</li>
					<li>Ruby</li>
					<li>Git,Github</li>
					<li>TDD,RSpec</li>
					<li>Responsive Design</li>
				</ul>
			</article>
			<article className={classes.exp}>
				<header>Experiences & Education</header>
				<ul>
					<li>
						<div>
							<p>Student at:</p>
							<a
								href="https://www.microverse.org/"
								className={classes.companies}
							>
								Microverse
							</a>
						</div>
						<p className={classes.date}> March 2021 - Present</p>
					</li>
				</ul>
			</article>
		</section>
	);
};

export default About;
