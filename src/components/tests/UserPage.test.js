import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './../UserPage';

import { configure, mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

var user = { 
	username:'dave', 
	display_name: 'Dave Mack',
	occupation: '', 
	sections: {'Where, When and What':''}, 
	fields:[], 
	images: {
		'50': 'google.com'
	},
	city: 'Brooklyn',
	country: 'United States',
	links: []
};
let props = {
	search: {
		users: [1,1,1]
	},
	user: {
		error: false,
		errorMessage: ''
	},
	getOneUser: ()=>{},
	searchUsers: ()=>{},
	userSearchError: ()=>{}
}
describe('UserPage Component', function () {
  it('Component should be built without errors', function () {
    const wrapper = shallow(<UserPage {...props} user={user}/>);
    expect(wrapper).to.be.ok;
  });

  it('should have a CardText Component', function () {
    const wrapper = shallow(<UserPage {...props} user={user} />);
    expect(wrapper.find('CardText').length).to.equal(1);
  });

  it('should have a CardHeader component', function () {
    const wrapper = shallow(<UserPage {...props} user={user} />);
    expect(wrapper.find('CardHeader').length).to.equal(1);
  });

  it('should have proper values within CardHeader', function () {
    const wrapper = shallow(<UserPage {...props} user={user} />);
    console.log(wrapper.find('CardHeader').props().title)
    const CardHeader = wrapper.find('CardHeader').props();
    expect(CardHeader.title).to.equal('@dave');
    expect(CardHeader.subtitle).to.equal('Dave Mack - Brooklyn, United States');
    expect(CardHeader.avatar).to.equal('google.com');
  });

  it('should have a Card component', function () {
    const wrapper = shallow(<UserPage {...props} user={user} />);
    expect(wrapper.find('Card').length).to.equal(1);
  });

  it('should have all props', function () {
    const wrapper = shallow(<UserPage {...props} user={user} />);
    expect(wrapper.instance().props.search).to.exist;
    expect(wrapper.instance().props.user).to.exist;
    expect(wrapper.instance().props.getOneUser).to.exist;
    expect(wrapper.instance().props.searchUsers).to.exist;
    expect(wrapper.instance().props.userSearchError).to.exist;
  });
});