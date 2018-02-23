import { combineReducers } from 'redux';
import user from './userReducer.js';
import search from './searchReducer.js';

const reducers = combineReducers({
	user,
	search
});

export default reducers;