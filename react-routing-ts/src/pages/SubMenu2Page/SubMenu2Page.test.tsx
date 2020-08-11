import React from 'react';
import { shallow } from 'enzyme';
import SubMenu2Page from './SubMenu2Page';

describe('<SubMenu2Page />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<SubMenu2Page />);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
