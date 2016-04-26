export const ADD_ITEM = 'ADD_ITEM';
export function addItem(text) {
	return { type: ADD_ITEM, text }
}

export const EDIT_USER = 'EDIT_USER';
export function editUser(name, age, mail) {
	return { type: EDIT_USER, name, age, mail }
}


export const REQUEST_REPOS = 'REQUEST_REPOS'
function requestRepos(repos) {
  return {
    type: REQUEST_REPOS,
    repos
  }
}


export const RECEIVE_REPOS = 'RECEIVE_REPOS'
function receiveRepos(repos, json) {
  return {
    type: RECEIVE_REPOS,
    repos,
    posts: json,
    receivedAt: Date.now()
  }
}


export function fetchPosts(repos) {
	return function (dispatch) {
		dispatch(requestRepos(repos)) //Request

		return fetch('https://api.github.com/users/glennwedin/repos')
			.then(response => response.json())
			.then(json => dispatch(receiveRepos(repos, json))
	  	).catch(err => {
			console.log(err)
		});
	}
}