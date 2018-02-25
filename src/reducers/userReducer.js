let message;
const initalState = {
	user: null,
	following: null,
	followers: null,
	experience: null,
	projects: null
};

const user = (state = initalState, action) => {
	switch (action.type) {
		case 'GET_ONE_USER':
			return state;
		case 'GET_ONE_USER_PENDING':
			return {...state, pending: true, error: false};
		case 'GET_ONE_USER_FULFILLED':
			return {...state, pending: false, error: false, user: action.payload.data.user};
		case 'GET_ONE_USER_REJECTED':
			message = (action.payload.message) ? action.payload.message : 'An error has occured. Please try again later.';
			return {...state, pending: false, error: true, errorMessage: message, user: null };

		case 'USER_SEARCH_ERROR':
			return {...state, error: true, errorMessage: action.message, user: null}

		case 'GET_USER_PROJECTS':
			return state;
		case 'GET_USER_PROJECTS_PENDING':
			return {...state, pending: true, error: false};
		case 'GET_USER_PROJECTS_FULFILLED':
			return {...state, pending: false, error: false, projects: action.payload.data.projects};
		case 'GET_USER_PROJECTS_REJECTED':
			message = (action.payload.message) ? action.payload.message : 'An error has occured. Please try again later.';
			return {...state, pending: false, error: true, errorMessage: message, projects: null };

		case 'GET_USER_EXPERIENCE':
			return state;
		case 'GET_USER_EXPERIENCE_PENDING':
			return {...state, pending: true, error: false};
		case 'GET_USER_EXPERIENCE_FULFILLED':
			return {...state, pending: false, error: false, experience: action.payload.data.work_experience};
		case 'GET_USER_EXPERIENCE_REJECTED':
			message = (action.payload.message) ? action.payload.message : 'An error has occured. Please try again later.';
			return {...state, pending: false, error: true, errorMessage: message, experience: null};

		case 'GET_USER_FOLLOWING':
			return state;
		case 'GET_USER_FOLLOWING_PENDING':
			return {...state, pending: true, error: false};
		case 'GET_USER_FOLLOWING_FULFILLED':
			return {...state, pending: false, error: false, following: action.payload.data.following};
		case 'GET_USER_FOLLOWING_REJECTED':
			message = (action.payload.message) ? action.payload.message : 'An error has occured. Please try again later.';
			return {...state, pending: false, error: true, errorMessage: message, following: null};

		case 'GET_USER_FOLLOWERS':
			return state;
		case 'GET_USER_FOLLOWERS_PENDING':
			return {...state, pending: true, error: false};
		case 'GET_USER_FOLLOWERS_FULFILLED':
			return {...state, pending: false, error: false, followers: action.payload.data.followers};
		case 'GET_USER_FOLLOWERS_REJECTED':
			message = (action.payload.message) ? action.payload.message : 'An error has occured. Please try again later.';
			return {...state, pending: false, error: true, errorMessage: message, followers: null};

		default:
			return state;
	}
};

export default user;