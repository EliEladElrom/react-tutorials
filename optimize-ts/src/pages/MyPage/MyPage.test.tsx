import React from 'react'
import { shallow } from 'enzyme'
import MyPage from './MyPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/MyPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<MyPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<MyPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
