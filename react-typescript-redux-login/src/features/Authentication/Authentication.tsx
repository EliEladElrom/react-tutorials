/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Feature: features/Authentication/Authentication.tsx
*/

import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export default class Authentication extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props)
    this.state = {
      name: this.props.history.location.pathname.substring(
        1,
        this.props.history.location.pathname.length
      ),
    }
  }
  render() {
    return <div className="Login">{this.state.name} Component</div>
  }
}

interface ILoginProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface ILoginState {
  name: string
}
