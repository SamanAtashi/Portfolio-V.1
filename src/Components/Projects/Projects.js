import React from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';
import nyct from '../../Assets/images/nyct.png';
import newsweek from '../../Assets/images/newsweek.png';
import TicTacToe from '../../Assets/images/ttt.png';
import Awesome_Books from '../../Assets/images/ab.png';
class Projects extends React.Component {
	state = {
		project_1: {
			name: 'NYCT-clone',
			status: 'Done',
			id: 'num1',
			img_src: nyct,
			description:
				'This project is a clone of the original website "nytimes.com".',
			stack: ['HTML', 'CSS'],
			url: 'https://nyct.netlify.app/',
			githubUrl: 'https://github.com/SamanAtashi/NYCT_articles_2.0',
		},
		project_2: {
			name: 'NewsWeek-clone',
			status: 'Done',
			id: 'num2',
			img_src: newsweek,
			description:
				'A CSS front-end webpage made with Bootstrap framework.',
			stack: ['HTML', 'CSS', 'BootStrap', 'Dynamic_Design'],
			url: 'https://mynewsweek.netlify.app/',
			githubUrl:
				'https://github.com/SamanAtashi/Newsweek_clone_page',
		},
		project_3: {
			name: 'TicTacToe (Ruby)',
			status: 'Done',
			id: 'num3',
			img_src: TicTacToe,
			description:
				'Tic-tac-toe is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid.',
			stack: ['Ruby'],
			url: 'https://github.com/SamanAtashi/Tic_Tac_Toe',
			githubUrl: 'https://github.com/SamanAtashi/Tic_Tac_Toe',
		},
		project_4: {
			name: 'Awesome Books',
			status: 'Done',
			id: 'num4',
			img_src: Awesome_Books,
			description:
				'Awesome Library is a mini book library project tha allows a user to add books, and remove a book. The project works with `localStorage` for its backend.',
			stack: ['JS', 'HTML', 'CSS'],
			url: 'https://samanatashi.github.io/Awesome_Books/',
			githubUrl: 'https://github.com/SamanAtashi/Awesome_Books',
		},
		// !-->coming soon
		project: {
			name: 'Project',
			status: 'Coming Soon...',
		},
	};

	render() {
		return (
			<section id="Projects" className={classes.container}>
				<Project
					name={this.state.project_1.name}
					desc={this.state.project_1.description}
					status={this.state.project_1.status}
					src={this.state.project_1.img_src}
					stack={this.state.project_1.stack}
					url={this.state.project_1.url}
					githubUrl={this.state.project_1.githubUrl}
				/>
				<Project
					name={this.state.project_2.name}
					desc={this.state.project_2.description}
					status={this.state.project_2.status}
					src={this.state.project_2.img_src}
					stack={this.state.project_2.stack}
					url={this.state.project_2.url}
					githubUrl={this.state.project_2.githubUrl}
				/>
				<Project
					name={this.state.project_3.name}
					desc={this.state.project_3.description}
					status={this.state.project_3.status}
					src={this.state.project_3.img_src}
					stack={this.state.project_3.stack}
					url={this.state.project_3.url}
					githubUrl={this.state.project_3.githubUrl}
				/>
				<Project
					name={this.state.project_4.name}
					desc={this.state.project_4.description}
					status={this.state.project_4.status}
					src={this.state.project_4.img_src}
					stack={this.state.project_4.stack}
					url={this.state.project_4.url}
					githubUrl={this.state.project_4.githubUrl}
				/>
				{/* <Project
					name={this.state.project_4.name}
					desc={this.state.project_4.description}
					status={this.state.project_4.status}
				/> */}
			</section>
		);
	}
}

export default Projects;
