/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/WorldMap/WorldMap.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import WorldMap from './WorldMap'
import { initClientsObject, initMapObject } from '../../model'

describe('<WorldMap />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <WorldMap
        mapData={initMapObject()}
        clientsData={[initClientsObject()]}
        selectedItem={initClientsObject()}
        setSelectedItem={Function}
        scale={200}
        cx={0}
        cy={100}
        initRotation={100}
        rotationSpeed={0.3}
      />
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
