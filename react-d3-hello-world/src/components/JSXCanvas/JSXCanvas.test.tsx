/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/JSXCanvas/JSXCanvas.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import JSXCanvas from './JSXCanvas'

describe('<JSXCanvas />', () => {
  let component

  beforeEach(() => {
    component = shallow(<JSXCanvas />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
