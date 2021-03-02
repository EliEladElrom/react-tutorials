/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/WorldMap/WorldMap.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import WorldMapAtlas from './WorldMapAtlas'

describe('<WorldMapAtlas />', () => {
  let component

  beforeEach(() => {
    component = shallow(<WorldMapAtlas />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
