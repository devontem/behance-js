import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Main from "./../components/Main.js";

const HOST = 'https://api.behance.net/v2';
const PROXY = 'https://cors-anywhere.herokuapp.com';
const CLIENT_ID = ''; // required! - must replace with valid app_key
const API_SUFFIX = `client_id=${CLIENT_ID}`;
const API_URLS = {
	USERS: `${PROXY}/${HOST}/users/`
};

const mapStateToProps = (state, ownProps) => {
	return {
		...state // spread state properties
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		searchUsers: function(value){
			dispatch({
				type: 'SEARCH_USERS',
				payload: axios.get('https://cors-anywhere.herokuapp.com/' + API_URLS.USERS + `?${API_SUFFIX}&q=${value}`)
			});
		},
		getOneUser: function(username){
			dispatch({
				type: 'GET_ONE_USER',
				payload: axios.get(API_URLS.USERS + `${username}?${API_SUFFIX}`)
			});

			// other async http requests
			this.getUserProjects(username);
			this.getUserExperience(username);
			this.getUserFollowing(username);
			this.getUserFollowers(username);
		},
		getUserProjects: function(username){
			dispatch({
				type: 'GET_USER_PROJECTS',
				payload: axios.get(API_URLS.USERS + `${username}/projects?${API_SUFFIX}`)
			});
		},
		getUserExperience: function(username){
			dispatch({
				type: 'GET_USER_EXPERIENCE',
				payload: axios.get(API_URLS.USERS + `${username}/work_experience?${API_SUFFIX}`)
			});
		},
		getUserFollowing: function(username){
			dispatch({
				type: 'GET_USER_FOLLOWING',
				payload: axios.get(API_URLS.USERS + `${username}/following?${API_SUFFIX}`)
			});
		},
		getUserFollowers: function(username){
			dispatch({
				type: 'GET_USER_FOLLOWERS',
				payload: axios.get(API_URLS.USERS + `${username}/followers?${API_SUFFIX}`)
			});
		},
		userSearchError: function(message){
			dispatch({
				type: 'USER_SEARCH_ERROR',
				message: message
			});
		}
	}
};

class MainContainer extends Component {
	render(){
		return <Main {...this.props} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
