import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
// import { AiOutlineMail } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import classes from './Links.module.css';

const Links = () => {
	return (
		<div className={classes.icons}>
			<FaLinkedin />
			<BsGithub />
			{/* <AiOutlineMail /> */}
			<MdEmail />
			<BsTwitter />
		</div>
	);
};

export default Links;
