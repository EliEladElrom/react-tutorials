/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/DonutChartWidget/DonutChartWidget.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import DonutChartWidget from './DonutChartWidget'

describe('<DonutChartWidget />', () => {
  let component

  beforeEach(() => {
    component = shallow(<DonutChartWidget />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
