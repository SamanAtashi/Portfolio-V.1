import { createStore } from 'redux';
import reducer from './portfolio.js';

const store = createStore(reducer);

export default store;
