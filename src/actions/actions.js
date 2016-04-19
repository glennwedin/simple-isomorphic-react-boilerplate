export const ADD_ITEM = 'ADD_ITEM';

export function addItem(text) {
	return { type: ADD_ITEM, text }
}