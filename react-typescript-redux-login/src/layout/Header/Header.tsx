import React from 'react'
import styled from 'styled-components'

import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'

// icons: https://material-ui.com/components/material-icons/
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

// style it
// https://material-ui.com/components/typography/
// https://material-ui.com/components/menus/
// SCSS
import './Header.scss'

// font
import 'fontsource-open-sans'

// drawer
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'

// drawer page
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import MailIcon from '@material-ui/icons/Mail'
import WebIcon from '@material-ui/icons/Web'
import WebAssetIcon from '@material-ui/icons/WebAsset'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import { UserButton } from '../../components/UserButton/UserButton'
import { UserListButton } from '../../components/UserListButton/UserListButton'

// redux toolkit
import { userState } from '../../features/Authentication/authenticationSlice'

// router
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import store from '../../redux/store'
import { ThemeEnum } from '../../features/Preferences/userPreferencesTypes'

function menuLabelBackgroundStyle(color: string) {
  return {
    color: color,
    padding: 20,
  }
}

function githubIconStyle(color: string) {
  return {
    color: color,
    width: 120,
  }
}

const DetectHover = styled.div`
  transition-duration: 0.5s;
  :hover {
    color: grey;
    span {
      opacity: 1;
    }
  }
`

// show small screen / hide elsewhere
// Media queries with styled components
const Nav = styled.nav`
  @media screen and (min-width: 0px) and (max-width: 400px) {
    display: block;
  }

  @media screen and (min-width: 401px) and (max-width: 1024px) {
    display: none;
  }
`

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {
      user: store.getState().authentication.user,
      anchorEl: null,
      anchorReference: 'anchorEl',
      toggleMenuFlag: false,
      menuBuildItem1Flag: false,
      menuBuildItem2Flag: false,
      menuBuildItem3Flag: false,
    }
    // Hooks can only be called inside of the body of a function component this is
    // Class components aren't function components
    // see: https://stackoverflow.com/questions/58395299/react-js-redux-hooks-invalid-hook-call
    this.handleToggle = this.handleToggle.bind(this)
  }
  componentWillMount() {
    // TODO
  }
  componentDidUpdate(prevProps: IHeaderProps, prevState: IHeaderState): void {
    // TODO
  }
  componentWillUpdate() {
    // TODO
  }
  handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, item: string) => {
    switch (item) {
      case '1':
        this.setState({
          ...this.state,
          anchorEl: event.currentTarget,
          menuBuildItem1Flag: true,
        })
        break
      case '2':
        this.setState({
          ...this.state,
          anchorEl: event.currentTarget,
          menuBuildItem2Flag: true,
        })
        break
      case '3':
        this.setState({
          ...this.state,
          anchorEl: event.currentTarget,
          menuBuildItem3Flag: true,
        })
        break
      case '4':
        // TODO link to contact page
        break
    }
  }
  handleListItemClick = () => {
    console.log('handleListItemClick')
    this.setState({ ...this.state, toggleMenuFlag: false })
  }
  handleMenuClose = () => {
    this.setState({
      ...this.state,
      anchorEl: null,
      menuBuildItem1Flag: false,
      menuBuildItem2Flag: false,
      menuBuildItem3Flag: false,
    })
  }
  handleToggle(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      ...this.state,
      toggleMenuFlag: !this.state.toggleMenuFlag,
    })
  }
  render() {
    return (
      <Toolbar>
        <div style={{ width: '100%' }}>
          <Box display="flex" p={1}>
            <Box p={1} flexGrow={1}>
              <Button
                component={Link}
                style={menuLabelBackgroundStyle(
                  store.getState().preferences.theme === ThemeEnum.Dark ? 'white' : 'black'
                )}
                to="/"
              >
                ELI ELAD ELROM
              </Button>
            </Box>
            <Box p={1}>
              <Nav>
                <Button
                  style={menuLabelBackgroundStyle(
                    store.getState().preferences.theme === ThemeEnum.Dark ? 'white' : 'black'
                  )}
                  onClick={(event) => this.handleMenuOpen(event, '1')}
                >
                  Build My Website
                </Button>
                <Menu
                  id="menu-appbar1"
                  anchorEl={this.state.anchorEl}
                  getContentAnchorEl={null}
                  open={this.state.menuBuildItem1Flag}
                  onClose={this.handleMenuClose}
                >
                  {[
                    { name: 'Self Build', url: '/BuildSiteCourse' },
                    { name: 'We Build', url: '/YouBuildMySite' },
                  ].map((itemObject, index) => (
                    <NavLink exact to={itemObject.url} className="NavLinkItem">
                      <MenuItem onClick={this.handleMenuClose}>{itemObject.name}</MenuItem>
                    </NavLink>
                  ))}
                </Menu>

                <Button
                  style={menuLabelBackgroundStyle(
                    store.getState().preferences.theme === ThemeEnum.Dark ? 'white' : 'black'
                  )}
                  onClick={(event) => this.handleMenuOpen(event, '2')}
                >
                  Coaching
                </Button>
                <Menu
                  id="menu-appbar2"
                  anchorEl={this.state.anchorEl}
                  getContentAnchorEl={null}
                  open={this.state.menuBuildItem2Flag}
                  onClose={this.handleMenuClose}
                >
                  {[
                    { name: 'Hourly', url: '/CoachingHourly' },
                    { name: 'Packages', url: '/CoachingPackage' },
                  ].map((itemObject, index) => (
                    <NavLink exact to={itemObject.url} className="NavLinkItem">
                      <MenuItem onClick={this.handleMenuClose}>{itemObject.name}</MenuItem>
                    </NavLink>
                  ))}
                </Menu>

                <Button
                  style={menuLabelBackgroundStyle(
                    store.getState().preferences.theme === ThemeEnum.Dark ? 'white' : 'black'
                  )}
                  onClick={(event) => this.handleMenuOpen(event, '3')}
                >
                  Resources
                </Button>
                <Menu
                  id="menu-appbar2"
                  anchorEl={this.state.anchorEl}
                  getContentAnchorEl={null}
                  open={this.state.menuBuildItem3Flag}
                  onClose={this.handleMenuClose}
                >
                  {[
                    { name: 'Books', url: '/Books' },
                    { name: 'Articles', url: '/Articles' },
                  ].map((itemObject, index) => (
                    <NavLink exact to={itemObject.url} className="NavLinkItem">
                      <MenuItem onClick={this.handleMenuClose}>{itemObject.name}</MenuItem>
                    </NavLink>
                  ))}
                </Menu>

                <Button
                  component={Link}
                  style={menuLabelBackgroundStyle(
                    store.getState().preferences.theme === ThemeEnum.Dark ? 'white' : 'black'
                  )}
                  to="/Contact"
                >
                  Contact
                </Button>

                <UserButton isLoggedIn={this.state.user.id === -1 ? false : true} />

                <a
                  href="https://github.com/EliEladElrom/react-tutorials"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    style={githubIconStyle(
                      store.getState().preferences.theme === ThemeEnum.Dark ? 'white' : 'black'
                    )}
                  >
                    <DetectHover>
                      <GitHubIcon fontSize="large" />
                    </DetectHover>
                  </IconButton>
                </a>
              </Nav>
            </Box>
            <Box p={1}>
              <div
                style={{
                  position: 'absolute',
                  right: '0.5rem',
                }}
              >
                <IconButton style={{ color: 'black' }} onClick={this.handleToggle}>
                  <DetectHover>
                    <MenuIcon fontSize="large" />
                  </DetectHover>
                </IconButton>

                <Drawer
                  anchor={'left'}
                  open={this.state.toggleMenuFlag}
                  onClose={this.handleToggle}
                >
                  <UserListButton isLoggedIn={this.state.user.id === -1 ? false : true} />
                  <Divider />

                  <List>
                    {[
                      { name: 'DIY Build My Own Website', url: '/BuildSiteCourse' },
                      { name: 'We Build Your Website', url: '/YouBuildMySite' },
                    ].map((itemObject, index) => (
                      <NavLink
                        to={itemObject.url}
                        className="NavLinkItem"
                        key={itemObject.url}
                        activeClassName="NavLinkItem-selected"
                      >
                        <ListItem button key={itemObject.name} onClick={this.handleListItemClick}>
                          <ListItemIcon>
                            {index % 2 === 0 ? <WebIcon /> : <WebAssetIcon />}
                          </ListItemIcon>
                          <ListItemText primary={itemObject.name} />
                        </ListItem>
                      </NavLink>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    {[
                      { name: 'Coaching Hourly', url: '/CoachingHourly' },
                      { name: 'Coaching Package', url: '/CoachingPackage' },
                    ].map((itemObject, index) => (
                      <NavLink
                        to={itemObject.url}
                        className="NavLinkItem"
                        key={itemObject.url}
                        activeClassName="NavLinkItem-selected"
                      >
                        <ListItem button key={itemObject.name} onClick={this.handleListItemClick}>
                          <ListItemIcon>
                            {index % 2 === 0 ? (
                              <SupervisorAccountIcon />
                            ) : (
                              <SupervisedUserCircleIcon />
                            )}
                          </ListItemIcon>
                          <ListItemText primary={itemObject.name} />
                        </ListItem>
                      </NavLink>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    {[
                      { name: 'Resource - Books', url: '/Books' },
                      { name: 'Resource - Articles', url: '/Articles' },
                    ].map((itemObject, index) => (
                      <NavLink
                        to={itemObject.url}
                        className="NavLinkItem"
                        key={itemObject.url}
                        activeClassName="NavLinkItem-selected"
                      >
                        <ListItem button key={itemObject.name} onClick={this.handleListItemClick}>
                          <ListItemIcon>
                            {index % 2 === 0 ? <MenuBookIcon /> : <LibraryBooksIcon />}
                          </ListItemIcon>
                          <ListItemText primary={itemObject.name} />
                        </ListItem>
                      </NavLink>
                    ))}
                  </List>
                  <Divider />
                  <NavLink
                    to={'/Contact'}
                    className="NavLinkItem"
                    key={'/Contact'}
                    activeClassName="NavLinkItem-selected"
                  >
                    <ListItem button key={'Contact'} onClick={this.handleListItemClick}>
                      <ListItemIcon>{<MailIcon />}</ListItemIcon>
                      <ListItemText primary={'Contact'} />
                    </ListItem>
                  </NavLink>
                </Drawer>
              </div>
            </Box>
          </Box>
        </div>
      </Toolbar>
    )
  }
}

interface IHeaderProps {
  // TODO
}

interface IHeaderState {
  user: userState
  anchorEl: any
  anchorReference: 'anchorEl'
  toggleMenuFlag: boolean
  menuBuildItem1Flag: boolean
  menuBuildItem2Flag: boolean
  menuBuildItem3Flag: boolean
}
