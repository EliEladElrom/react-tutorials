/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicPieChart/BasicPieChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import BasicPieChart from './BasicPieChart'

describe('<BasicPieChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BasicPieChart width={900} height={400} top={10} right={50} bottom={50} left={50} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
