import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

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
					<Search {...this.props} />

					{ (this.props.user.error) ?
						(<p style={styles.center}>{this.props.user.errorMessage}</p>) : '' }

					{ (this.props.user.user) ?
						<UserPage {...this.props} /> : '' }
				</div>
			</div>
		);
	}
}

export default Main;