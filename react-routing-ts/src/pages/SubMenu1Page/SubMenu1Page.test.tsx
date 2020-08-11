import React from 'react';
import { shallow } from 'enzyme';
import SubMenu1Page from './SubMenu1Page';

describe('<SubMenu1Page />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<SubMenu1Page />);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
