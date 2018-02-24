import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Card, { CardText } from 'material-ui/Card';

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
	handleUpdateInput(value){
		this.props.searchUsers(value);
	}

	onNewRequest(node){
		// handle select from autocomplete
		if (node && node.id){
			this.props.getOneUser(node.id);
		} else {
			this.props.userSearchError('No users were found matching this criteria.');
		}
	}

	render(){
		return (
			<Card style={style.root}>
				<CardText>
					<AutoComplete
						ref="search"
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
}

export default Search;