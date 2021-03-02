/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/ClientListDetail/ClientListDetail.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import { RecoilRoot } from 'recoil'
import ClientListDetail from './ClientListDetail'

describe('<ClientListDetail />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <RecoilRoot>
        <ClientListDetail />
      </RecoilRoot>
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
