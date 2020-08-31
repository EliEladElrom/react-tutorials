/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: templates/UserListButton/UserListButtontton.tsx
*/

// see:
// https://medium.com/@omt66/conditional-rendering-in-react-ts-240526074821
// https://reactjs.org/docs/conditional-rendering.html

import React from 'react'
import './UserButton.scss'
import Button from '@material-ui/core/Button/Button'
import { Link } from 'react-router-dom'
import store from '../../redux/store'
import { ThemeEnum } from '../../features/Preferences/userPreferencesTypes'

const menuLabelsLight = {
  color: 'white',
  padding: 20,
}

const menuLabelsDark = {
  color: 'black',
  padding: 20,
}

export class UserButton extends React.Component<IUserButtonProps, {}> {
  render() {
    const { isLoggedIn } = this.props
    const selectedPanel = isLoggedIn ? (
      <Button
        component={Link}
        style={
          store.getState().preferences.theme === ThemeEnum.Dark ? menuLabelsLight : menuLabelsDark
        }
        to="/MembersPage"
      >
        Members
      </Button>
    ) : (
      <Button
        component={Link}
        style={
          store.getState().preferences.theme === ThemeEnum.Dark ? menuLabelsLight : menuLabelsDark
        }
        to="/LoginPage"
      >
        Login
      </Button>
    )
    return selectedPanel
  }
}

export interface IUserButtonProps {
  isLoggedIn: boolean
}
