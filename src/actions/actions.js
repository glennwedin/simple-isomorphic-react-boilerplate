export const GET_ITEM = 'GET_ITEM';
export const ADD_ITEM = 'ADD_ITEM';


export function getItem(text) {
	return { type: GET_ITEM, text }
}
export function addItem(text) {
	return { type: ADD_ITEM, text }
}