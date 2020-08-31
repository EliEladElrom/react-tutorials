import { configureStore, combineReducers } from '@reduxjs/toolkit'
import notificationSlice from '../features/Notification/notificationSlice'

const store = configureStore({
  reducer: combineReducers({
    notification: notificationSlice,
  }),
})

export default store