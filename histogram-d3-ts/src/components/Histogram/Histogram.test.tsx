/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Histogram/Histogram.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import { RecoilRoot } from 'recoil'
import Histogram from './Histogram'

describe('<Histogram />', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <RecoilRoot>
        <Histogram data={[]} margin={{ top: 20, right: 45, bottom: 20, left: 50 }} width={400} height={400} fill="tomato" />
      </RecoilRoot>
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
