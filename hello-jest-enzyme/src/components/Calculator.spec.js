// src/components/Calculator.spec.js

import React from "react";
import { shallow, mount } from "enzyme";
import Calculator from "./Calculator";

// describe(name, fn) creates a block that groups together several related tests in one "test suite".
describe('Calculator Snapshots', () => {
    it('should render our Snapshots correctly', () => {
        const wrapper = shallow(<Calculator />);
        expect(wrapper).toMatchSnapshot();
    });
});

// non-interactive components - using it (single test)
it('should render the link url', () => {
    const wrapper = shallow(<Calculator />);
    const a = wrapper.find('a');
    const result = a.text();

    expect(result).toBe('@elieladelrom');
});

// it(is aliased by test so it does the same thing as it)
test('should render component title', () => {
    const wrapper = shallow(<Calculator componentTitle={'Online Calculator'} version={'0.01-beta'}/>);
    const title = wrapper.find('h1.title').text();

    expect(title).toBe('Online Calculator - Version #0.01-beta');
});

test('Testing output indirectly - should clean our result box clicking clear', () => {
    const wrapper = shallow(<Calculator />);
    const output = wrapper.find('div.output').text();
    const btn = wrapper.find('button');

    expect(output).toBe("0");

    btn.simulate('click');
    const output_2 = wrapper.find('div.output').text();
    expect(output_2).toBe("0");
});

describe('Testing Calculator calculateTwoNumbers testsuite directly', () => {
    test('Testing calculateTwoNumbers Directly - add', () => {
        const wrapper = shallow(<Calculator />);
        const instance = wrapper.instance();
        expect(instance.calculateTwoNumbers(1, 2, '+')).toBe(3);
    });
    test('Testing calculateTwoNumbers Directly - multiple', () => {
        const wrapper = shallow(<Calculator />);
        const instance = wrapper.instance();
        expect(instance.calculateTwoNumbers(2, 2, '*')).toBe(4);
    });
});

test('test clicked calculator button method', () => {
    const wrapper = shallow(<Calculator />);
    const instance = wrapper.instance();
    instance.clicked('1');
    expect( wrapper.state('output')).toBe(1);
});

import ImageMapper from 'react-image-mapper';
import { URL, MAP } from "./Calculator";
require('jest-canvas-mock');

describe('when onClick prop is provided', () => {
    it('map styles should have "cursor:pointer"', () => {
        const wrapper = mount(<ImageMapper src={URL} map={MAP} onClick={() => {}} />);
        const mapStyles = wrapper.find('map').get(0).props.style;

        expect(mapStyles).toMatchObject({"cursor": "pointer"});
        wrapper.unmount();
    });
});


test('spy', () => {
    const wrapper = shallow(<Calculator />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'startOver');
    wrapper.find('button').simulate('click');
    expect(wrapper.state('output')).toBe(0);
});

