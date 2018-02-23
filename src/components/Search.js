import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const dataSourceConfig = {
	text: 'username',
	value: 'id'
};

class Search extends Component {
	handleUpdateInput(value){
		this.props.searchUsers(value);
	}

	onNewRequest(node){
		console.log('onNewRequest', node)
		// handle select from autocomplete
		if (node && node.id){
			this.props.getOneUser(node.id);
		}
	}

	render(){
		return (
			<div>
				<div>
					<AutoComplete
						ref="search"
						hintText="Search for Username"
						dataSource={this.props.search.users}
						onUpdateInput={this.handleUpdateInput.bind(this)}
						floatingLabelText="Search for Username"
						fullWidth={true}
						dataSourceConfig={dataSourceConfig}
						onNewRequest={this.onNewRequest.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default Search;