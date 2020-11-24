import React from 'react';
import App from './App';
import {shallow} from "enzyme";


describe('Header', () => {
    it('renders the heading text', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('h1').text()).toBe('Hello React!');

    });

    it('renders para text', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('p').text()).toBe('Nice TDD');
    })

    it('renders name in h2', ()=> {
        const name = "Vijay"
        const wrapper= shallow(<App name={name} /> )
        expect(wrapper.find('h2').text()).toBe(name);
    })
})
