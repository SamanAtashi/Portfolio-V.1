import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
	return (
		<section className={classes.container} id="Contact">
			<article>
				<header>Hello.</header>
				<ul>
					<li>
						<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=milady00126@gmail.com">
							Email: milady00126@gmail.com
						</a>
					</li>
					<li>
						<a href="https://twitter.com/AtashiSaman">
							Twitter: @AtashiSaman
						</a>
					</li>
					<li>
						<a href="https://github.com/SamanAtashi">
							GitHub: @SamanAtashi
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/saman-atashi-9539911b0">
							LinkedIn: @saman-atashi
						</a>
					</li>
				</ul>
			</article>
		</section>
	);
};

export default Contact;
