import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

import Search from './Search';
import UserPage from './UserPage';

const styles = {
	root: {
		margin: '20px auto',
		maxWidth: '700px',
		padding: '10px'
	},
	center: {
		textAlign: 'center'
	}
};
const app_name = 'behance-js';

class Main extends Component {
	render(){
		return (
			<div>
				<AppBar
					title={app_name}
				/>
				<div style={styles.root}>
					<Search
						search={this.props.search} 
						getOneUser={this.props.getOneUser}
						userSearchError={this.props.userSearchError}
						searchUsers={this.props.searchUsers}
						getUserProjects={this.props.getUserProjects}
						getUserExperience={this.props.getUserExperience}
						getUserFollowing={this.props.getUserFollowing}
						getUserFollowers={this.props.getUserFollowers}
					/>

					{ (this.props.user.error) ?
						(<p style={styles.center}>{this.props.user.errorMessage}</p>) : '' }

					{ (this.props.user.user) ?
						<UserPage 
							user={this.props.user}
						/> : '' }
				</div>
			</div>
		);
	}
}

Main.propTypes = {
	user: PropTypes.shape({
		user: PropTypes.object,
		error: PropTypes.bool,
		errorMessage: PropTypes.string
	}),
	search: PropTypes.shape({
		users: PropTypes.array
	}),
	getOneUser: PropTypes.func.isRequired,
	searchUsers: PropTypes.func.isRequired,
	userSearchError: PropTypes.func.isRequired
};

export default Main;