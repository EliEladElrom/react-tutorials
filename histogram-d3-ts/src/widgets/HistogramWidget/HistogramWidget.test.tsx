/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/HistogramWidget/HistogramWidget.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import { RecoilRoot } from 'recoil'
import HistogramWidget from './HistogramWidget'

describe('<HistogramWidget />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <RecoilRoot>
        <HistogramWidget />
      </RecoilRoot>
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
