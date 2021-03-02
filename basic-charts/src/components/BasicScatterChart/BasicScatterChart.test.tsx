/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicScatterChart/BasicScatterChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import BasicScatterChart from './BasicScatterChart'

describe('<BasicScatterChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BasicScatterChart top={10} right={50} bottom={50} left={50} width={460} height={400} fill="tomato" />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
