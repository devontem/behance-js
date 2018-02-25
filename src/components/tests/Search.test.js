import React from 'react';
import ReactDOM from 'react-dom';
import Search from './../Search';

import { configure, mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

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
	userSearchError: ()=>{},
  getUserProjects: ()=>{},
  getUserExperience: ()=>{},
  getUserFollowing: ()=>{},
  getUserFollowers: ()=>{}
}
describe('Search Component', function () {
  it('Component should be built without errors', function () {
    const wrapper = shallow(<Search {...props}/>);
    expect(wrapper).to.be.ok;
  });

  it('should have a AutoComplete Component', function () {
    const wrapper = shallow(<Search {...props}/>);
    expect(wrapper.find('AutoComplete').length).to.equal(1);
  });

  it('should have a CardText component', function () {
    const wrapper = shallow(<Search {...props}/>);
    expect(wrapper.find('CardText').length).to.equal(1);
  });

  it('should have a Card component', function () {
    const wrapper = shallow(<Search {...props}/>);
    expect(wrapper.find('Card').length).to.equal(1);
  });

  it('should have all props', function () {
    const wrapper = shallow(<Search {...props} />);
    expect(wrapper.instance().props.search).to.exist;
    expect(wrapper.instance().props.user).to.exist;
    expect(wrapper.instance().props.getOneUser).to.exist;
    expect(wrapper.instance().props.searchUsers).to.exist;
    expect(wrapper.instance().props.userSearchError).to.exist;
  });

  it('AutoComplete component should update state with new values', function () {
    const wrapper = shallow(<Search {...props}/>);

    wrapper.instance().handleUpdateInput('test');
    expect(wrapper.instance().state.value).to.equal('test');
  });
});