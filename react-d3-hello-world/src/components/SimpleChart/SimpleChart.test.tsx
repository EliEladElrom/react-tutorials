/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleChart/SimpleChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import SimpleChart from './SimpleChart'

describe('<SimpleChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<SimpleChart />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
