/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Brush/Brush.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Brush from './Brush'

describe('<Brush />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Brush />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
