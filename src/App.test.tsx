import React from 'react';
import App from './App';
import {shallow} from "enzyme";

it('renders the heading', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toBe('Hello React!');
})
