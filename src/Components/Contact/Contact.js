import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
	return (
		<section className={classes.container} id="Contact">
			<article>
				<header>Hello.</header>
				<h5>I can be found at the following:</h5>
				<ul>
					<li>Email: milady00126@gmail.com</li>
					<li>Twitter: @AtashiSaman</li>
					<li>GitHub: @SamanAtashi</li>
					<li>LinkedIn: @saman-atashi</li>
				</ul>
			</article>
		</section>
	);
};

export default Contact;
