import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';

import List from './List';

const styles = {
	bold: {
		fontWeight: 'bold'
	}
};

class UserPage extends Component {
	render(){
		const userObject = this.props.user;
		const { user, following, followers, experience, projects } = userObject;

		return (
			<Card>
				<CardHeader
					title={`@${user.username}`} 
					subtitle={`${user.display_name} - ${user.city}, ${user.country}`}
					avatar={(user.images || {})[50]}
				/>
				<CardText>
					{ (user.fields) ?
						(<div>
							<h3 style={styles.bold}>Fields</h3>
							<p>{ (user.fields || []).join(', ') }</p>
						</div>) : '' }

					{ (user.occupation) ?
						(<div>
							<h3 style={styles.bold}>Occupation</h3>
							<p>{user.occupation}</p>
						</div>) : '' }

					{ (user.stats) ?
						<List
							data={user.stats}
							isArray={false}
							oneField={false}
						/> : '' }

					{ (experience && experience.length) ?
						<List
							data={experience}
							isArray={true}
							title={'Experience'}
							oneField={true}
							valueKey='position'
							valueKey2='organization'
						/> : '' }

					{ (projects && projects.length) ?
						<List
							data={projects}
							title={'Projects'}
							isArray={true}
							oneField={true}
							valueKey='name'
						/> : '' }

					{ (following && following.length) ?
						<List
							data={following}
							isArray={true}
							title={'Following'}
							oneField={true}
							valueKey='username'
						/> : '' }

					{ (followers && followers.length) ?
						<List
							data={followers}
							isArray={true}
							title={'Followers'}
							oneField={true}
							valueKey='username'
						/> : '' }
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
		links: PropTypes.array.isRequired
	})
};

export default UserPage;