/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicAreaChart/BasicAreaChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import BasicAreaChart from './BasicAreaChart'

describe('<BasicAreaChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BasicAreaChart top={10} right={50} bottom={50} left={50} width={460} height={400} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
