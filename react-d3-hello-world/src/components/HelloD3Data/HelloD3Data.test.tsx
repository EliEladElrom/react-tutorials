/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloD3Data/HelloD3Data.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import HelloD3Data from './HelloD3Data'

describe('<HelloD3Data />', () => {
  let component

  beforeEach(() => {
    component = shallow(<HelloD3Data />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
