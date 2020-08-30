/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: LoginForm.tsx
*/

import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { members } from '../../model'
import styles from './LoginForm.styles'

const LoginFormInner: React.FunctionComponent<ILoginFormProps> = (props: ILoginFormProps) => {
  const onTextFieldChangeHandler = (fieldId: any) => (e: any) => {
    props.onUpdateLoginField(fieldId, e.target.value)
  }

  return (
    <div className={props.classes.container}>
      <TextField
        label="name"
        margin="normal"
        value={props.loginInfo.username}
        onChange={onTextFieldChangeHandler('username')}
      />
      <TextField
        label="password"
        type="password"
        margin="normal"
        value={props.loginInfo.password}
        onChange={onTextFieldChangeHandler('password')}
      />
      <Button variant="contained" color="primary" onClick={props.onLogin}>
        Login
      </Button>
    </div>
  )
}

interface ILoginFormProps extends WithStyles<typeof styles> {
  onLogin: () => void
  onUpdateLoginField: (name: string, value: any) => void
  loginInfo: members
}

export const LoginForm = withStyles(styles)(LoginFormInner)
