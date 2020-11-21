// src/components/Calculator/Calculator.test.tsx

import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Calculator, { ICalculator } from './Calculator'

// non-interactive components - using it (single test)
it('should render the link url', () => {
  const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
  const a = wrapper.find('a')
  const result = a.text()

  expect(result).toBe('@elieladelrom')
})

// describe(name, fn) creates a block that groups together several related tests in one "test suite".
describe('`Calculator Snapshots', () => {
  it('should render our Snapshots correctly', () => {
    const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
    expect(wrapper).toMatchSnapshot()
  })
})

// it(is aliased by test so it does the same thing as it)
test('should render component title', () => {
  const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
  const title = wrapper.find('h1.title').text()

  expect(title).toBe('Online `Calculator - Version #0.01-beta')
})

test('Testing output indirectly - should clean our result box clicking clear', () => {
  const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
  const btn = wrapper.find('#btn')
  btn.simulate('click')

  const output: string = wrapper.find('.calculator-output').text()
  expect(output).toBe('0')
})

describe('Testing `Calculator calculateTwoNumbers testsuite directly', () => {
  test('Testing calculateTwoNumbers Directly - add', () => {
    const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
    const instance = wrapper.instance() as ICalculator
    expect(instance.calculateTwoNumbers(1, 2, '+')).toBe(3)
  })
  test('Testing calculateTwoNumbers Directly - multiple', () => {
    const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
    const instance = wrapper.instance() as ICalculator
    expect(instance.calculateTwoNumbers(2, 2, '*')).toBe(4)
  })
})

test('test clicked calculator button method', () => {
  const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
  const instance = wrapper.instance() as ICalculator
  instance.clicked('1')
  expect(wrapper.state('output')).toBe(1)
})

test('spy', () => {
  const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
  const instance = wrapper.instance() as ICalculator
  jest.spyOn(instance, 'startOver')
  wrapper.find('button').simulate('click')
  expect(wrapper.state('output')).toBe(0)
})

describe('Loader component', () => {
  it('should render complete after x seconds', () => {
    const wrapper = shallow(<Calculator componentTitle="Online `Calculator" version="0.01-beta" />)
    const clock = sinon.useFakeTimers()
    const instance = wrapper.instance() as ICalculator
    instance.startLoader(3000)
    clock.tick(3000)

    const title = wrapper.find('h1.subTitle').text()
    expect(title).toBe('Loading Complete')
  })
})
