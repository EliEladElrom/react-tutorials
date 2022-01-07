/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/NetworkWidget/NetworkWidget.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import { RecoilRoot } from 'recoil'
import NetworkWidget from './NetworkWidget'

describe('<NetworkWidget />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <RecoilRoot>
        <NetworkWidget />
      </RecoilRoot>
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
