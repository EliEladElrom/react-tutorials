/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/WorldwideChart/WorldwideChart.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import WorldwideChart from './WorldwideChart'
import { initMapObject } from '../../model'

describe('<WorldwideChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<WorldwideChart clientsData={[]} cy={50} cx={50} scale={20} initRotation={0.5} mapData={initMapObject()} rotationSpeed={0.5} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
