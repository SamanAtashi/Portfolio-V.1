import React from 'react';
import classes from './About.module.css';

const About = () => {
	return (
		<section className={classes.container} id="About">
			<article className={classes.about_text}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Mauris a lobortis lorem, eu rhoncus nunc.
					Morbi nisl mauris, dictum sollicitudin placerat
					ac, pellentesque ultrices nunc. Donec aliquet
					sapien velit, a molestie libero vestibulum ac.
					Vestibulum ante ipsum primis in faucibus orci
					luctus et ultrices posuere cubilia curae; Mauris
					sed elit nec nulla mattis eleifend a vel quam.
					Quisque varius nunc vel aliquet porttitor.
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
