/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: NotFoundPage.tsx
*/

import React from 'react';
import './NotFoundPage.scss';
import { RouteComponentProps } from 'react-router-dom'

export default class NotFoundPage extends React.Component<INotFoundPageProps, INotFoundPageState> {

  constructor(props: INotFoundPageProps) {
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
      <div className="NotFoundPage">
        {this.state.name} Component
      </div>);
  }
}

interface INotFoundPageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface INotFoundPageState {
  name: string
}