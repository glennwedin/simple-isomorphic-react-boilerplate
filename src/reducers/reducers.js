import { ADD_ITEM, GET_ITEM } from "../actions/actions.js";
import { combineReducers } from 'redux';

/*
*	Reducer
*/
function items (state = [], action) {
	switch(action.type) {
		case ADD_ITEM: 
			console.log('Adding item', ...state);
			return [
				...state,
				{
					text: action.text
				}
			]

		case GET_ITEM:
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

const MainApp = combineReducers({
	items
});

export default MainApp;





