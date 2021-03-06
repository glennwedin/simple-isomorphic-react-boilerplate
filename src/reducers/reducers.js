import {
	ADD_ITEM,
	EDIT_USER,
	REQUEST_REPOS,
	RECEIVE_REPOS
} from "../actions/actions.js";
import { combineReducers } from 'redux';

/*
Initial state
*/

let itemstate = [
	{
		text: "Hei"
	},
	{
		text: "Jeg er tekst"
	},
	{
		text: "Ja, men jeg er Glenn!"
	}
]

let userstate = {
	name: "Glenn Wedin",
	age: 28,
	mail: "glenn.wedin@gmail.com"
}



/*
*	Reducer
*/

function items (state = itemstate, action) {
	switch(action.type) {
		case ADD_ITEM:
			console.log('Adding item', action);
			return [
				...state,
				{
					text: action.text
				}
			]

		default:
			return state;
	}
}

function user(state = userstate, action) {
	switch(action.type) {
		case EDIT_USER:
			console.log('Editing');
			return {
				name: action.name,
				age: action.age,
				mail: action.mail
			}

		default:
			return state;
	}
}

function repos(state = {
	isFetching: false,
	didInvalidate: false,
	repos: []
}, action) {
	switch(action.type) {
		case REQUEST_REPOS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case RECEIVE_REPOS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				repos: action.posts,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}


const MainAppReducer = combineReducers({
	items
});

export default MainAppReducer;
