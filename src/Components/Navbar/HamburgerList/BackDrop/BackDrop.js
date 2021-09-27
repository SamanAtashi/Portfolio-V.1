import React from 'react';
import classes from './BackDrop.module.css';

const BackDrop = (props) => {
	return props.show ? (
		<div
			className={classes.backDrop}
			onClick={() => console.log('backdrop')}
		></div>
	) : null;
};

export default BackDrop;
