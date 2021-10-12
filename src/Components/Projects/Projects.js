import React from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';

class Projects extends React.Component {
	state = {
		project_1: {
			name: 'Project 1',
			status: 'Coming Soon...',
			id: 'num1',
			img_src: 'asdasfasfdafknasgodsg',
			description: 'asfngsdignfdin',

			// ! use "#" to iterate through stack array
			stack: ['HTML', 'css', 'webpack'],
		},
		project_2: {
			name: 'Project 2',
			status: 'Coming Soon...',
			id: 'num2',
			img_src: 'asdasfasfdafknasgodsg',
			description: 'asfngsdignfdin',
		},
		project_3: {
			name: 'Project 3',
			status: 'Coming Soon...',
			id: 'num3',
			img_src: 'asdasfasfdafknasgodsg',
			description: 'asfngsdignfdin',
		},
		project_4: {
			name: 'Project 4',
			status: 'Coming Soon...',
			id: 'num4',
			img_src: 'asdasfasfdafknasgodsg',
			description: 'asfngsdignfdin',
		},
	};

	render() {
		return (
			<section id="Projects" className={classes.container}>
				<Project
					name={this.state.project_1.name}
					desc={this.state.project_1.description}
					status={this.state.project_1.status}
				/>
				<Project
					name={this.state.project_2.name}
					desc={this.state.project_2.description}
					status={this.state.project_2.status}
				/>
				<Project
					name={this.state.project_3.name}
					desc={this.state.project_3.description}
					status={this.state.project_3.status}
				/>
				<Project
					name={this.state.project_4.name}
					desc={this.state.project_4.description}
					status={this.state.project_4.status}
				/>
			</section>
		);
	}
}

export default Projects;
