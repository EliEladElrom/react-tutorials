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
import { initClientsObject } from '../../model'

describe('<ClientListDetail />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <RecoilRoot>
        <ClientListDetail clientsData={[]} selectedClient={initClientsObject()} setSelectedClient={() => {}} />
      </RecoilRoot>
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
