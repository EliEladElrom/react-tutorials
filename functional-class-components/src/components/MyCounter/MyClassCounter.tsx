// src/components/MyCounter/MyClassCounter.tsx

import React from 'react'

export default class MyClassCounter extends React.Component<
  IMyClassCounterProps,
  IMyClassCounterState
> {
  constructor(props: IMyClassCounterProps) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleClick(e: React.MouseEvent) {
    this.setState((prevState) => {
      const newState = prevState.count + 1
      return {
        ...prevState,
        count: newState,
      }
    })
  }

  render() {
    return (
      <div>
        <p>You clicked MyClassCounter {this.state.count} times</p>
        <button type="submit" onClick={this.handleClick}>
          Click MyClassCounter
        </button>
      </div>
    )
  }
}

interface IMyClassCounterProps {
  // TODO
}

interface IMyClassCounterState {
  count: number
}
