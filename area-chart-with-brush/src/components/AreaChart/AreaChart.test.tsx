/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/AreaChart/AreaChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import AreaChart from './AreaChart'

describe('<AreaChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<AreaChart />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
