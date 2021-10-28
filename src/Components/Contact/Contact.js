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
							Email:
							<span>milady00126@gmail.com</span>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/AtashiSaman">
							Twitter: <span>@AtashiSaman</span>
						</a>
					</li>
					<li>
						<a href="https://github.com/SamanAtashi">
							GitHub: <span>@SamanAtashi</span>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/saman-atashi-9539911b0">
							LinkedIn: <span>@saman-atashi</span>
						</a>
					</li>
				</ul>
			</article>
		</section>
	);
};

export default Contact;
