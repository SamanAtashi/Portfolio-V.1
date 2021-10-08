import React from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';

class Projects extends React.Component {
	state = {
		project_1: {
			name: 'pro 1',
			id: 'num1',
			img_src: 'asdasfasfdafknasgodsg',
			description: 'asfngsdignfdin',
		},
		project_2: {
			name: 'pro 2',
			id: 'num2',
			img_src: 'asdasfasfdafknasgodsg',
			description: 'asfngsdignfdin',
		},
		project_3: {
			name: 'pro 3',
			id: 'num3',
			img_src: 'asdasfasfdafknasgodsg',
			description: 'asfngsdignfdin',
		},
	};

	render() {
		return (
			<section id="Projects" className={classes.container}>
				<Project name={this.state.project_1.name} />
				<Project name={this.state.project_2.name} />
				<Project name={this.state.project_3.name} />
			</section>
		);
	}
}

export default Projects;
