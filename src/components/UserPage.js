import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';

const styles = {
	bold: {
		fontWeight: 'bold'
	}
};

class UserPage extends Component {
	render(){
		const { user } = this.props;
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
};

UserPage.propTypes = {
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
		occupation: PropTypes.string.isRequired,
		images: PropTypes.object.isRequired,
		fields: PropTypes.array.isRequired,
		sections: PropTypes.shape({
			'Where, When and What': PropTypes.string.isRequired
		}).isRequired
	})
};

export default UserPage;