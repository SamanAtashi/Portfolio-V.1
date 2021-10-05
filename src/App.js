import './App.css';
import Main from './Container/Main';
import { Provider } from 'react-redux';
import store from './Store/store';

const App = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
};

export default App;
