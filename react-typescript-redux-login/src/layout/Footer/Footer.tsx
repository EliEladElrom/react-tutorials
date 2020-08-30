// see: https://davevanhoorn.com/2020/01/converting-a-react-function-component-to-typescript
// function components: https://stackoverflow.com/questions/56329992/invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-com
// and https://fettblog.eu/typescript-react/components/
// and https://medium.com/@ethan_ikt/react-stateless-functional-component-with-typescript-ce5043466011

import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { List, ListItem } from '@material-ui/core'
import store from '../../redux/store'
import { ThemeEnum } from '../../features/Preferences/userPreferencesTypes'
import { switchTheme } from '../../features/Preferences/preferencesSlice'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import { useStyles } from './Footer.styles'

function NestedGrid(props: any) {
  const classes = useStyles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/Contact" className={classes.block}>
                Contact us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/About" className={classes.block}>
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/Books" className={classes.block}>
                Books
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/BuildSiteCourse" className={classes.block}>
                Course
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()}{' '}
          <button
            onClick={() => store.dispatch(switchTheme(store.getState()))}
            className={aClasses}
          >
            <InvertColorsIcon className={classes.icon} /> Change theme to{' '}
            {store.getState().preferences.theme === ThemeEnum.Dark ? 'light' : 'dark'}
          </button>
        </div>
      </div>
    </footer>
  )
}

NestedGrid.propTypes = {
  whiteFont: PropTypes.bool,
}

const Footer: FunctionComponent<TFooterProps> = ({ theme }) => (
  <nav className={theme === ThemeEnum.Dark ? 'dark' : 'light'}>
    <NestedGrid />
  </nav>
)

export type TFooterProps = {
  theme: ThemeEnum
}

export default Footer
