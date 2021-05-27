/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/ChartWidget/ChartWidget.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import ChartWidget from './ChartWidget'

describe('<ChartWidget />', () => {
  let component

  beforeEach(() => {
    component = shallow(<ChartWidget />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
