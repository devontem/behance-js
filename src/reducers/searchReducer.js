let message;

const search = (state = {}, action) => {
	console.log('action', action);
	window.data = action.payload ? action.payload.data : [];
	switch (action.type) {
		case 'SEARCH_USERS':
			return state;
		case 'SEARCH_USERS_PENDING':
			return {...state, pending: true};
		case 'SEARCH_USERS_FULFILLED':
			return {...state, pending: false, users: action.payload.data.users};
		case 'SEARCH_USERS_REJECTED':
			message = (action.payload.message) ? action.payload.message : 'An error has occured. Please try again later.';
			return {...state, pending: false, error: true, errorMessage: message };

		default:
			return state;
	}
};

export default search;