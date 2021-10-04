import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
// import { AiOutlineMail } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';

const Links = () => {
	return (
		<div>
			<FaLinkedin />
			<BsGithub />
			{/* <AiOutlineMail /> */}
			<MdEmail />
			<BsTwitter />
		</div>
	);
};

export default Links;
