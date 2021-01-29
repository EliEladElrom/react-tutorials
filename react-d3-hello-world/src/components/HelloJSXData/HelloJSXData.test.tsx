/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloJSXData/HelloJSXData.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import HelloJSXData from './HelloJSXData'

describe('<HelloJSXData />', () => {
  let component

  beforeEach(() => {
    component = shallow(<HelloJSXData />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
