/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: SubMenu2Page.tsx
*/

import React from 'react';
import './SubMenu2Page.scss';
import { RouteComponentProps } from 'react-router-dom'

export default class SubMenu2Page extends React.Component<ISubMenu2PageProps, ISubMenu2PageState> {

  constructor(props: ISubMenu2PageProps) {
    super(props);
    this.state = {
      name: this.props.history.location.pathname.substring(1, this.props.history.location.pathname.length)
    }
  }
  componentWillMount() {
    // TODO
  }
  componentDidUpdate() {
    // TODO
  }
  componentWillUpdate() {
    // TODO
  }
  render() {
    return (
      <div className="SubMenu2Page">
        {this.state.name} Component
      </div>);
  }
}

interface ISubMenu2PageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface ISubMenu2PageState {
  name: string
}