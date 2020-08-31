// src/features/Authentication/notificationSlice.ts

import { createSlice } from '@reduxjs/toolkit'

export interface notificationState {
  id: number
  type: string
  description: string
}

interface SliceState {
  notification: notificationState
}

const notifications = createSlice({
  name: 'notifications',
  initialState: {
    notification: {
      id: -1,
      type: '',
      description: '',
    },
  } as SliceState,
  reducers: {
    setNotification: (state, action) => {
      state.notification = {
        id: action.payload.id,
        type: action.payload.type,
        description: action.payload.description,
      }
    },
  },
})

export const { setNotification } = notifications.actions
export default notifications.reducer
