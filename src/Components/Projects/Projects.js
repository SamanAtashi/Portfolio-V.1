import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Project from './Project/Project';
import classes from './Projects.module.css';
import nyct from '../../Assets/images/nyct.png';
import newsweek from '../../Assets/images/newsweek.png';
import TicTacToe from '../../Assets/images/ttt.png';
import Awesome_Books from '../../Assets/images/ab.png';
import iCinema from '../../Assets/images/icinema.png';
import todoR from '../../Assets/images/todo-react.png';
import calculator from '../../Assets/images/calculator.png';
import todo from '../../Assets/images/todolist.png';
import leaderboard from '../../Assets/images/leaderboard.png';
class Projects extends React.Component {
	state = {
		done: [
			{
				name: 'ToDo List (React)',
				status: 'Done',
				id: 'num6',
				img_src: todoR,
				description: 'To Do List Application made with React.',
				stack: ['React', 'LocalStorage'],
				url: 'https://samanatashi.github.io/Todo_list_react/',
				githubUrl:
					'https://github.com/SamanAtashi/Todo_list_react',
			},
			{
				name: 'iCinema',
				status: 'Done',
				id: 'num5',
				img_src: iCinema,
				description:
					'The iCinema is a single web app that is based on the TVmaze API. With the use of the Involvement API to POST and GET the likes and comments, users can comment and like a certain series.',
				stack: ['JS', 'WebPack', 'TvMaze API', 'HTML', 'CSS'],
				url: 'https://samanatashi.github.io/JS-Capstone-project/dist/',
				githubUrl:
					'https://github.com/SamanAtashi/JS-Capstone-project',
			},

			{
				name: 'My Math Magician',
				status: 'Done',
				id: 'num7',
				img_src: calculator,
				description:
					'Simple Calculator built with React. It allows users to make simple calculations and read a random math-releted quote.',
				stack: ['React'],
				url: 'https://mymathmagician.netlify.app/',
				githubUrl:
					'https://github.com/SamanAtashi/My-Math-Magicians-app',
			},
			{
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
			{
				name: 'TicTacToe (Ruby)',
				status: 'Done',
				id: 'num3',
				img_src: TicTacToe,
				description:
					'Tic-tac-toe is a game for two players, X and O, who take turns marking the spaces in a 3??3 grid.',
				stack: ['Ruby'],
				url: 'https://github.com/SamanAtashi/Tic_Tac_Toe',
				githubUrl: 'https://github.com/SamanAtashi/Tic_Tac_Toe',
			},
			{
				name: 'Awesome Books',
				status: 'Done',
				id: 'num4',
				img_src: Awesome_Books,
				description:
					'Awesome Library is a mini book library project tha allows a user to add books, and remove a book. The project works with `localStorage` for its backend.',
				stack: ['JS', 'HTML', 'CSS'],
				url: 'https://samanatashi.github.io/Awesome_Books/',
				githubUrl:
					'https://github.com/SamanAtashi/Awesome_Books',
			},

			{
				name: 'To Do List',
				status: 'Done',
				id: 'num8',
				img_src: todo,
				description:
					'To Do List Application made with Javascript and webpack.',
				stack: ['JS', 'WebPack', 'HTML', 'CSS'],
				url: 'https://samanatashi.github.io/Best_To-Do-List/dist/',
				githubUrl:
					'https://github.com/SamanAtashi/Best_To-Do-List',
			},

			{
				name: 'Leader Board',
				status: 'Done',
				id: 'num9',
				img_src: leaderboard,
				description:
					'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
				stack: ['JS', 'API', 'WebPack', 'HTML', 'CSS'],
				url: 'https://samanatashi.github.io/LeaderBoard/dist/',
				githubUrl: 'https://github.com/SamanAtashi/LeaderBoard',
			},
			{
				name: 'NYCT-clone',
				status: 'Done',
				id: 'num1',
				img_src: nyct,
				description:
					'This project is a clone of the original website "nytimes.com".',
				stack: ['HTML', 'CSS'],
				url: 'https://nyct.netlify.app/',
				githubUrl:
					'https://github.com/SamanAtashi/NYCT_articles_2.0',
			},
		],
		// !-->coming soon
		project: {
			name: 'Project',
			status: 'Coming Soon...',
		},
	};

	projectsList = this.state.done.map((project, idx) => {
		return (
			<Project
				name={project.name}
				desc={project.description}
				status={project.status}
				src={project.img_src}
				stack={project.stack}
				url={project.url}
				githubUrl={project.githubUrl}
			/>
		);
	});

	responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1024 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1024, min: 768 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 768, min: 600 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1,
		},
	};
	render() {
		return (
			<section id="Projects" className={classes.container}>
				<Carousel
					showDots={true}
					focusOnSelect={true}
					swipeable={true}
					draggable={true}
					itemClass={classes.item}
					containerClass={classes.carousel}
					sliderClass={classes.slider}
					responsive={this.responsive}
					ssr={true} // means to render carousel on server-side.
					removeArrowOnDeviceType={['tablet', 'mobile']}
					deviceType={this.props.deviceType}
				>
					{this.projectsList}
				</Carousel>
			</section>
		);
	}
}

export default Projects;
