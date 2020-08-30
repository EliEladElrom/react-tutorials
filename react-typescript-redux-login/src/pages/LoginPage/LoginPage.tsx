/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: LoginPage.tsx
*/

import React from 'react'
import './LoginPage.scss'
import { RouteComponentProps } from 'react-router-dom'
import { Centered } from '../../layout/Centered'
import { Card, CardHeader, CardContent, WithStyles } from '@material-ui/core'
import { LoginForm } from '../../components/Login/LoginForm'
import styles from '../../components/Login/LoginForm.styles'
import { members, initMember } from '../../model'
import { isValidLogin } from '../../api/login'
import store from '../../redux/store'
import { setNotification } from '../../features/Notification/notificationSlice'
import { notificationTypesEnums } from '../../features/Notification/notificationEnums'

export default class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
  constructor(props: ILoginPageProps) {
    super(props)
    this.state = {
      name: this.props.history.location.pathname.substring(
        1,
        this.props.history.location.pathname.length
      ),
      loginInfo: initMember(),
    }
  }
  onUpdateLoginFieldHandler = (name: string, value: string) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [name]: value,
      },
    })
  }
  onLogin = () => {
    let id: number = Math.floor(Math.random() * 101 + 1)
    if (isValidLogin(this.state.loginInfo)) {
      store.dispatch(
        setNotification({
          id: id,
          type: notificationTypesEnums.Success,
          description: 'Member username Success!',
        })
      )
      this.props.history.push('/MembersPage')
    } else {
      store.dispatch(
        setNotification({
          id: id,
          type: notificationTypesEnums.Fail,
          description: 'Incorrect credentials please try again!',
        })
      )
    }
  }
  render() {
    return (
      <Centered>
        <Card>
          <CardHeader title="Members Login" />
          <CardContent>
            <LoginForm
              onLogin={this.onLogin}
              onUpdateLoginField={this.onUpdateLoginFieldHandler}
              loginInfo={this.state.loginInfo}
            />
          </CardContent>
        </Card>
      </Centered>
    )
  }
}

interface ILoginPageProps extends WithStyles<typeof styles>, RouteComponentProps<{ name: string }> {
  onLogin: () => void
  onUpdateLoginField: (name: string, value: any) => void
  loginInfo: members
}

interface ILoginPageState {
  name: string
  loginInfo: members
}
