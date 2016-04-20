import { createStore } from 'redux';
import MainAppReducer from '../reducers/reducers';

let store = createStore(MainAppReducer);

export default store;