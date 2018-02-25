import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Card, { CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import _ from 'underscore';

const dataSourceConfig = {
	text: 'username',
	value: 'id'
};

const style = {
	root: {
		marginBottom: '20px'
	}
};

class Search extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			value: ''
		}
	}	

	_debounce = _.debounce(this.searchUsers, 1300);

	handleUpdateInput(value){
		this.setState({value: value});
		this._debounce(this._debounce, 1500);
	}

	searchUsers(){
		this.props.searchUsers(this.state.value);
	}

	onNewRequest(node){
		// handle select from autocomplete
		if (node && node.username){
			this.props.getOneUser(node.username);
		} else {
			this.props.userSearchError('No users were found matching this criteria.');
		}
	}

	render(){
		return (
			<Card style={style.root}>
				<CardText>
					<AutoComplete
						hintText="type in username"
						dataSource={this.props.search.users}
						onUpdateInput={this.handleUpdateInput.bind(this)}
						floatingLabelText="Search"
						fullWidth={true}
						dataSourceConfig={dataSourceConfig}
						onNewRequest={this.onNewRequest.bind(this)}
					/>
				</CardText>
			</Card>
		);
	}
};

Search.propTypes = {
	search: PropTypes.shape({
		users: PropTypes.array.isRequired
	}).isRequired,
	getOneUser: PropTypes.func.isRequired,
	userSearchError: PropTypes.func.isRequired
};

export default Search;