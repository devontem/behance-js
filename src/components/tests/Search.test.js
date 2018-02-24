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
	userSearchError: ()=>{}
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

  // it('handleUpdateInput should call this.props.searchUsers', function () {
  //   const wrapper = shallow(<Search {...props}/>);
  //   console.log(wrapper.instance().props)
  //   var spy = sinon.spy(wrapper.instance().props, 'searchUsers');

  //   // wrapper.instance().handleUpdateInput();
  //   expect(spy.called).to.equal(true);
  // });

  // it('onNewRequest should call this.props.getOneUser on success', function () {
  //   const wrapper = shallow(<Search {...props}/>);
  //   expect(wrapper.find('Card').length).to.equal(1);
  // });

  // it('onNewRequest should call this.props.userSearchError on failure', function () {
  //   const wrapper = shallow(<Search {...props}/>);
  //   expect(wrapper.find('Card').length).to.equal(1);
  // });
});