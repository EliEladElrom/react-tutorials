/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BubbleChart/BubbleChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import BubbleChart from './BubbleChart'

describe('<BubbleChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BubbleChart minValue={0} maxValue={100} width={500} height={500} backgroundColor="white" textFillColor="white" bubblesData={[]} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
