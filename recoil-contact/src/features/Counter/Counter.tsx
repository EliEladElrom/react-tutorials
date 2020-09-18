// https://stackoverflow.com/questions/62860300/using-recoil-js-in-react-in-class-component-without-using-hooks
import * as React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { countState } from '../../recoil/atoms/counterAtoms'

// wrapper
const Counter = () => {
  const setCount = useSetRecoilState(countState)
  const getCount: number = useRecoilValue(countState)
  return <ContactPage setCount={setCount} getCount={getCount} />
}

class ContactPage extends React.Component<IContactProps, IContactState> {
  constructor(props: IContactProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <button
        onClick={() => {
          const nextToken = this.props.getCount + 1
          this.props.setCount(nextToken)
        }}
      >
        My count is: {this.props.getCount}
      </button>
    )
  }
}

interface IContactProps {
  setCount: any
  getCount: number
}

interface IContactState {}

export default Counter
