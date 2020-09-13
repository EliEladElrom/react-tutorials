/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: LoginPage.tsx
*/
import React, { useEffect, useState } from 'react'
import './LoginPage.scss'
import { Centered } from '../../layout/Centered'
import { Card, CardContent, CardHeader, WithStyles } from '@material-ui/core'
import { LoginForm } from '../../components/Login/LoginForm'
import { initUser, users } from '../../model'

import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/userActions'
import { RouteComponentProps } from 'react-router-dom'
import styles from '../../components/Login/LoginForm.styles'

function LoginPage(props: ILoginPageProps) {
  const [values, setState] = useState(initUser)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(props.userUI.loading)
  }, [props.userUI])
  const onLogin = () => {
    console.log('Login.tsx :: onLogin :: values :: ' + JSON.stringify(values))
    setLoading(true)
    props.loginUser(values, props.history)
  }
  const onUpdateLoginFieldHandler = (name: string, value: string) => {
    console.log('Update name: ' + name + ', value: ' + value)
    setState({
      ...values,
      [name]: value,
    })
  }
  return (
    <Centered>
      <Card>
        <CardHeader title="Members Login" />
        <CardContent>
          <LoginForm
            onLogin={onLogin}
            onUpdateLoginField={onUpdateLoginFieldHandler}
            loginInfo={values}
            loading={loading}
          />
        </CardContent>
      </Card>
    </Centered>
  )
}
interface ILoginPageProps extends WithStyles<typeof styles>, RouteComponentProps<{ name: string }> {
  loginUser: (userData: users, history: any) => void
  user: users
  userUI: any
}
interface ILoginPageState {
  user: users
  userUI: any
}
const mapLoginPageActionsToProps = {
  loginUser,
}
const mapLoginPageStateToProps = (state: ILoginPageState) => ({
  user: state.user,
  userUI: state.userUI,
})
export default connect(mapLoginPageStateToProps, mapLoginPageActionsToProps)(LoginPage)
