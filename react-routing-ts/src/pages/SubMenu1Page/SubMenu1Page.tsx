/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: SubMenu1Page.tsx
*/

import React from 'react';
import './SubMenu1Page.scss';
import { RouteComponentProps } from 'react-router-dom'

export default class SubMenu1Page extends React.Component<ISubMenu1PageProps, ISubMenu1PageState> {

  constructor(props: ISubMenu1PageProps) {
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
      <div className="SubMenu1Page">
        {this.state.name} Component
      </div>);
  }
}

interface ISubMenu1PageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface ISubMenu1PageState {
  name: string
}