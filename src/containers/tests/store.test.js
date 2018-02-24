import React from 'react';
import ReactDOM from 'react-dom';
import store from './../store';

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
let promise_200 = function(){
  return new Promise((resolve, reject)=>{
    resolve({
      data: user
    });
  });
};
let promise_400 = function(){
  return new Promise((resolve, reject)=>{
    reject({});
  });
};
describe('Store Component', function () {
  // it('USER_SEARCH_ERROR action should work', function () {
  //   store.dispatch({
  //     type: 'USER_SEARCH_ERROR',
  //     message: 'test error'
  //   });
  //   const state = store.getState();

  //   expect(state.user.error).to.be.equal(true);
  //   expect(state.user.errorMessage).to.be.equal('test error');
  // });

  // it('GET_ONE_USER action should work', function () {
  //   store.dispatch({
  //     type: 'GET_ONE_USER',
  //     payload: promise_200()
  //   });
  //   const state = store.getState();
  //   console.log('getState', state)

  //   expect(state.user.name).to.be.equal(`dave`);
  //   expect(state.user.user.city).to.be.equal('Brooklyn');
  // });

  // it('GET_ONE_USER action should work', function () {
  //   store.dispatch({
  //     type: 'GET_ONE_USER',
  //     payload: promise_400()
  //   });
  //   const state = store.getState();
  //   console.log('getState', state)

  //   expect(state.user.name).to.be.equal(`dave`);
  //   expect(state.user.user.city).to.be.equal('Brooklyn');
  // });
});