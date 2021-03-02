/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicBarChart/BasicBarChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import BasicBarChart from './BasicBarChart'

describe('<BasicBarChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BasicBarChart top={10} right={50} bottom={50} left={50} width={600} height={400} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
