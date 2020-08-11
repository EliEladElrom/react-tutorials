// src/features/Authentication/authenticationSlice.ts

import { createSlice } from '@reduxjs/toolkit'

export interface userState {
  id: number
  firstName: string
  lastName: string
}

interface SliceState {
  user: userState
}

const authentication = createSlice({
  name: 'authentication',
  initialState: {
    user: {
      id: -1,
      firstName: '',
      lastName: '',
    },
  } as SliceState,
  reducers: {
    setUser: (state, action) => {
      state.user = {
        id: 1,
        firstName: 'Eli',
        lastName: 'Elrom',
      }
    },
  },
})

export const { setUser } = authentication.actions
export default authentication.reducer
