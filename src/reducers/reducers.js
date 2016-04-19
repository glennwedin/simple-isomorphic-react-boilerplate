import { ADD_ITEM } from "../actions/actions.js";
import { combineReducers } from 'redux';

/*
Initial state
*/

let initialState = [ 
	{
		text: "Hei"
	},
	{
		text: "Jeg er tekst"
	},
	{
		text: "Ja, men jeg er Glenn!"
	},
]



/*
*	Reducer
*/
function items (state = initialState, action) {
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

const MainAppReducer = combineReducers({
	items
});

export default MainAppReducer;





