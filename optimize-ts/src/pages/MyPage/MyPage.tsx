/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/page/MyPage/MyPage.tsx
*/

import React from 'react'
import './MyPage.scss'
import { RouteComponentProps } from 'react-router-dom'
import Button from '@material-ui/core/Button'

// Import required modules:
// import { useRecoilValue } from 'recoil'

// import statement with no specifiers:
// import 'recoil'

import Helmet from 'react-helmet'

export default class MyPage extends React.PureComponent<IMyPageProps, IMyPageState> {
  constructor(props: IMyPageProps) {
    super(props)
    this.state = {
      name: this.props.history.location.pathname
        .substring(1, this.props.history.location.pathname.length)
        .replace('/', ''),
      results: 0,
    }
  }

  // If you need 'shouldComponentUpdate' -> Refactor to React.Component
  // Read more about component lifecycle in the official docs:
  // https://reactjs.org/docs/react-component.html

  /*
  public shouldComponentUpdate(nextProps: IMyPageProps, nextState: IMyPageState) {
    // invoked before rendering when new props or state are being received.
    return true // or prevent rendering: false
  } */

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<IMyPageProps, IMyPageState> = (
    props: IMyPageProps,
    state: IMyPageState
  ) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: IMyPageProps, prevState: IMyPageState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IMyPageProps, prevState: IMyPageState, snapshot: IMyPageSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    const onClickHandler = (event: React.MouseEvent) => {
      event.preventDefault()
      import('./math').then((math) => {
        this.setState((prevState) => {
          const newState = prevState.results + math.add(1, 2)
          return {
            ...prevState,
            results: newState,
          }
        })
      })
    }
    return (
      <div className="MyPage">
        <Helmet>
          <title>My Page</title>
        </Helmet>
        {this.state.name} Component
        <Button type="submit" onClick={onClickHandler}>
          Math.add
        </Button>
        {this.state.results}
      </div>
    )
  }
}

interface IMyPageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IMyPageState {
  name: string
  results: number
}

interface IMyPageSnapshot {
  // TODO
}
