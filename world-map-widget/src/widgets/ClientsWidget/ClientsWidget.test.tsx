/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/ClientsWidget/ClientsWidget.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import { RecoilRoot } from 'recoil'
import ClientsWidget from './ClientsWidget'

describe('<ClientsWidget />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <RecoilRoot>
        <ClientsWidget />
      </RecoilRoot>
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
