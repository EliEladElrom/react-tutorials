import { FunctionComponent, useState } from 'react'
import { ThemeEnum } from '../../features/Preferences/userPreferencesTypes'
import store from '../../redux/store'
import FooterComponent from './Footer'
import React from 'react'

export const FooterTheme: FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Light)
  store.subscribe(() => {
    setTheme(store.getState().preferences.theme)
  })
  return <FooterComponent theme={theme} />
}
