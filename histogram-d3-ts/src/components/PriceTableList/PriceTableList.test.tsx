/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/PriceTableList/PriceTableList.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import PriceTableList from './PriceTableList'

describe('<PriceTableList />', () => {
  let component

  beforeEach(() => {
    component = shallow(<PriceTableList data={[]} textColor="white" />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
