/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: templates/MembersPage/MembersPage.tsx
*/

import React from 'react'
import './MembersPage.scss'
import Button from '@material-ui/core/Button'
import { RouteComponentProps } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/userActions'
import store from '../../redux/store'

export default class MembersPage extends React.Component<IMembersPageProps, IMembersPageState> {
  constructor(props: IMembersPageProps) {
    super(props)
    this.state = {
      name: this.props.history.location.pathname.substring(
        1,
        this.props.history.location.pathname.length
      ),
    }
  }
  render() {
    const handleSubmit = (e: any) => {
      console.log('Members.tsx :: handleSubmit :: logoutUser')
      e.preventDefault()
      store.dispatch(logoutUser())
    }
    return (
      <div className="MembersPage">
        <div>{this.state.name} Component</div>
        <p />
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Logout
        </Button>
      </div>
    )
  }
}

interface IMembersPageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IMembersPageState {
  name: string
}
