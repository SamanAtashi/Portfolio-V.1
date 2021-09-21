import React from 'react';
import classes from './Hamburger.module.css';

const Hamburger = (props) => {
	return (
		<button className={classes.body} onClick={props.openHandler}>
			<label htmlFor="check">

				<input type="checkbox" id="check" />
				<span></span>
				<span></span>
				<span></span>
			</label>
		</button>
	);
};

export default Hamburger;
