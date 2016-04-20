export const ADD_ITEM = 'ADD_ITEM';
export function addItem(text) {
	return { type: ADD_ITEM, text }
}

export const EDIT_USER = 'EDIT_USER';
export function editUser(name, age, mail) {
	return { type: EDIT_USER, name, age, mail }
}


export function fetchPosts(subreddit) {
	return function (dispatch) {
		dispatch(requestPosts(subreddit))

		return fetch(`http://www.reddit.com/r/${subreddit}.json`)
			.then(response => response.json())
			.then(json => dispatch(receivePosts(subreddit, json))
	  	).catch(err => {
			console.log(err)
		});
	}
}