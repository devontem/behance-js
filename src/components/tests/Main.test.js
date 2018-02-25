import React from 'react';
import ReactDOM from 'react-dom';
import Main from './../Main';

import { configure, mount, shallow } from 'enzyme';
import {expect} from 'chai';

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
    errorMessage: '',
    user: null,
    following: [],
    followers: [],
    projects: [],
    experience: []
  },
  getOneUser: ()=>{},
  searchUsers: ()=>{},
  userSearchError: ()=>{},
  getUserProjects: ()=>{},
  getUserExperience: ()=>{},
  getUserFollowing: ()=>{},
  getUserFollowers: ()=>{}
}
describe('Main Component', function () {
  it('Component should be built without errors', function () {
    const wrapper = shallow(<Main {...props}/>);
    expect(wrapper).to.be.ok;
  });

  it('Title to be behance-js', function () {
    const wrapper = shallow(<Main {...props}/>);
    expect(wrapper.find('AppBar').props().title).to.equal('behance-js');
  });

  it('User component to be hidden when there is no user', function () {
    const wrapper = shallow(<Main {...props}/>);
    expect(wrapper.find('UserPage').length).to.equal(0);
  });

  it('User component to be shown when there a user', function () {
    const wrapper = shallow(<Main {...props} user={{user: user}}/>);
    expect(wrapper.find('UserPage').length).to.equal(1);
  });

  it('should have all props', function () {
    const wrapper = shallow(<Main {...props} />);
    expect(wrapper.instance().props.search).to.exist;
    expect(wrapper.instance().props.user).to.exist;
    expect(wrapper.instance().props.getOneUser).to.exist;
    expect(wrapper.instance().props.searchUsers).to.exist;
    expect(wrapper.instance().props.userSearchError).to.exist;
    expect(wrapper.instance().props.getUserExperience).to.exist;
    expect(wrapper.instance().props.getUserProjects).to.exist;
    expect(wrapper.instance().props.getUserFollowing).to.exist;
    expect(wrapper.instance().props.getUserFollowers).to.exist;
  });
});