import React, {Component} from 'react';

class Search extends Component {
	searchUsers(){
		let search = this.refs.search.value;
		this.props.searchUsers(search);
	}

	getUser(id){
		this.props.getOneUser(id);
	}

	render(){
		return (
			<div>
				<button onClick={this.getUser.bind(this)}>GET USER</button>
				<input onChange={this.searchUsers.bind(this)} ref="search" name="user" type="text" />
			</div>
		);
	}
}

export default Search;