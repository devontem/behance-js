import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import Search from './Search';
import UserPage from './UserPage';

class Main extends Component {
	render(){
		return (
			<div>
				<h1>Main</h1>
				<Search {...this.props} />
				<UserPage {...this.props} />
			</div>
		);
	}
}

export default Main;