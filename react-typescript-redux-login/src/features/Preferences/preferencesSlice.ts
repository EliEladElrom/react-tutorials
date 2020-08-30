// src/features/Preferences/preferencesSlice.ts

import { createSlice } from '@reduxjs/toolkit'
import { ThemeEnum } from './userPreferencesTypes'

interface SliceState {
  theme: ThemeEnum
}

const preferences = createSlice({
  name: 'preferences',
  initialState: {
    theme: ThemeEnum.Light,
  } as SliceState,
  reducers: {
    setThemeDark: (state, action) => {
      state.theme = ThemeEnum.Dark
    },
    setThemeLight: (state, action) => {
      state.theme = ThemeEnum.Light
    },
    switchTheme: (state, action) => {
      state.theme = state.theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light
    },
  },
})

export const { setThemeDark, setThemeLight, switchTheme } = preferences.actions
export default preferences.reducer
