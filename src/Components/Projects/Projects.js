import React from 'react';
import Project from './Project/Project';

class Projects extends React.Component {
	state = {
		project_1: {
			name: 'sth',
			id: 'num1',
			img_src: '',
			description: '',
		},
	};

	render() {
		return (
			<div id="Projects">
				<Project />
			</div>
		);
	}
}

export default Projects;
