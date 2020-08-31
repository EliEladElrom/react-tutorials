import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/Authentication/authenticationSlice'
import prefSlice from '../features/Preferences/preferencesSlice'
import notificationSlice from '../features/Notification/notificationSlice'

const store = configureStore({
  reducer: combineReducers({
    authentication: authReducer,
    preferences: prefSlice,
    notification: notificationSlice,
  }),
})

export default store
