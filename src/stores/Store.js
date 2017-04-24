import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import MainAppReducer from '../reducers/reducers';


let store = createStore(
	MainAppReducer,
	applyMiddleware(
		thunkMiddleware,
		logger
	)
);

export default store;
