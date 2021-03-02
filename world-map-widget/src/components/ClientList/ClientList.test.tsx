/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/ClientList/ClientList.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import { RecoilRoot } from 'recoil'
import ClientList from './ClientList'

describe('<ClientList />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <RecoilRoot>
        <ClientList />
      </RecoilRoot>
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
