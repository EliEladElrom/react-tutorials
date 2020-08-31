/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: templates/UserListButton/UserListButton.tsx
*/

import React from 'react'
import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import CardMembershipIcon from '@material-ui/icons/CardMembership'

export class UserListButton extends React.Component<IUserListButtonProps, {}> {
  render() {
    const { isLoggedIn } = this.props
    const selectedPanel = isLoggedIn ? (
      <NavLink
        to={'/MembersPage'}
        className="NavLinkItem"
        key={'/MembersPage'}
        activeClassName="NavLinkItem-selected"
      >
        <ListItem button key={'Members'}>
          <ListItemIcon>{<CardMembershipIcon />}</ListItemIcon>
          <ListItemText primary={'Members'} />
        </ListItem>
      </NavLink>
    ) : (
      <NavLink
        to={'/LoginPage'}
        className="NavLinkItem"
        key={'/LoginPage'}
        activeClassName="NavLinkItem-selected"
      >
        <ListItem button key={'Login'}>
          <ListItemIcon>{<VpnKeyIcon />}</ListItemIcon>
          <ListItemText primary={'Login'} />
        </ListItem>
      </NavLink>
    )
    return selectedPanel
  }
}

export interface IUserListButtonProps {
  isLoggedIn: boolean
}
