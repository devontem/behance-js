let message;

const user = (state = {}, action) => {
	console.log('action', action);
	window.data = action.payload ? action.payload.data : [];
	switch (action.type) {
		case 'GET_ONE_USER':
			return state;
		case 'GET_ONE_USER_PENDING':
			return {...state, pending: true, error: false};
		case 'GET_ONE_USER_FULFILLED':
			return {...state, pending: false, error: false, user: action.payload.data.user};
		case 'GET_ONE_USER_REJECTED':
			message = (action.payload.message) ? action.payload.message : 'An error has occured. Please try again later.';
			return {...state, pending: false, error: true, errorMessage: message };

		default:
			return state;
	}
};

export default user;