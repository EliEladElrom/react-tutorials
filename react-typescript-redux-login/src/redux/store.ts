import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/Authentication/authenticationSlice'
import notificationSlice from '../features/Notification/notificationSlice'

const store = configureStore({
  reducer: combineReducers({
    authentication: authReducer,
    notification: notificationSlice,
  }),
})

export default store