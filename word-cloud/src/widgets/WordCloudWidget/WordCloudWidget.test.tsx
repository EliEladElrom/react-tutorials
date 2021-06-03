/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/WordCloudWidget/WordCloudWidget.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import WordCloudWidget from './WordCloudWidget'

describe('<WordCloudWidget />', () => {
  let component

  beforeEach(() => {
    component = shallow(<WordCloudWidget />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
