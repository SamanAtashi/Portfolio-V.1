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
			<FaLinkedin />
			<BsGithub />
			{/* <AiOutlineMail /> */}
			<MdEmail />
			<BsTwitter />
		</div>
	);
};

export default Links;
