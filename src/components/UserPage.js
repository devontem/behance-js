import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
	bold: {
		fontWeight: 'bold'
	}
};

class UserPage extends Component {
	searchUsers(){
		let search = this.refs.search.value;
		this.props.searchUsers(search);
	}

	render(){
		const { user } = this.props.user;
		return (
			<Card>
				<CardHeader
					title={`@${user.username}`} 
					subtitle={`${user.display_name} - ${user.city}, ${user.country}`}
					avatar={(user.images || {})[50]}
				/>
				<CardText>
					<div>
						<h3 style={styles.bold}>Occupation</h3>
						<p>{user.occupation}</p>
					</div>
					<div>
						<h3 style={styles.bold}>Fields</h3>
						<p>{ (user.fields || []).join(', ') }</p>
					</div>
					<div>
						<h3 style={styles.bold}>Where, When and What</h3>
						<p>{(user.sections || {})['Where, When and What']}</p>
					</div>
				</CardText>
			</Card>
		);
	}
}

export default UserPage;