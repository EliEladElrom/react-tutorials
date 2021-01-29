/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloD3Class/HelloD3Class.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import HelloD3Class from './HelloD3Class'

describe('<HelloD3Class />', () => {
  let component

  beforeEach(() => {
    component = shallow(<HelloD3Class />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
