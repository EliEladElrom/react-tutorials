import React from 'react'
import { shallow } from 'enzyme'
import PulsatingCircle from './PulsatingCircle'

describe('<PulsatingCircle />', () => {
  let component

  beforeEach(() => {
    component = shallow(<PulsatingCircle cx={50} cy={50} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
