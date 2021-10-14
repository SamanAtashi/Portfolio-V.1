import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
// import { AiOutlineMail } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import classes from './Links.module.css';
import { useSelector } from 'react-redux';

const Links = () => {
	const show = useSelector((state) => state.show);
	return (
		<div
			className={
				show
					? classes.icons + ' ' + classes.iconsOn
					: classes.icons
			}
		>
			<a href="https://www.linkedin.com/in/saman-atashi-9539911b0">
				<FaLinkedin />
			</a>
			<a href="https://github.com/SamanAtashi">
				<BsGithub />
			</a>
			<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=milady00126@gmail.com">
				<MdEmail />
			</a>
			<a href="https://twitter.com/AtashiSaman">
				<BsTwitter />
			</a>
		</div>
	);
};

export default Links;
