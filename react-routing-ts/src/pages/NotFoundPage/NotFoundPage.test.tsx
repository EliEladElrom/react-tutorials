import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<NotFoundPage />);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
