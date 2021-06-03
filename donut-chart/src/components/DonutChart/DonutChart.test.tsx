/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/DonutChart/DonutChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import DonutChart from './DonutChart'

describe('<DonutChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<DonutChart />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
