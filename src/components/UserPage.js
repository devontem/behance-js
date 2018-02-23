import React, {Component} from 'react';

class UserPage extends Component {
	searchUsers(){
		let search = this.refs.search.value;
		this.props.searchUsers(search);
	}

	render(){
		return (
			<div>
				<h1>User Page</h1>
			</div>
		);
	}
}

export default UserPage;