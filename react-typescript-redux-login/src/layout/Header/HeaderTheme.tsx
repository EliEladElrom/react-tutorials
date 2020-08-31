import { FunctionComponent, useState } from 'react'
import { ThemeEnum } from '../../features/Preferences/userPreferencesTypes'
import store from '../../redux/store'
import AppBar from '@material-ui/core/AppBar/AppBar'
import HeaderComponent from './Header'
import React from 'react'

function appBarBackgroundStyle(color: string) {
  return {
    background: color,
  }
}

export const HeaderTheme: FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Light)
  store.subscribe(() => {
    console.log('store.getState().preferences.theme: ' + store.getState().preferences.theme)
    setTheme(store.getState().preferences.theme)
  })
  return (
    <AppBar
      position="fixed"
      style={appBarBackgroundStyle(theme === ThemeEnum.Dark ? '#2b2b2b' : 'white')}
    >
      <HeaderComponent />
    </AppBar>
  )
}
