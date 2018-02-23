import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Main from "./../components/Main.js";

const mapStateToProps = (state, ownProps) => {
	return {
		...state // spread state properties
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		searchUsers: function(id){
			dispatch({
				type: 'SEARCH_USERS',
				payload: axios.get('/users.json')
			});
		},
		getOneUser: function(id){
			dispatch({
				type: 'GET_ONE_USER',
				payload: axios.get('/user.json'),
				id: id
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
