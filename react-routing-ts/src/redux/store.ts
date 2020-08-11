// src/redux/store.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/Authentication/authenticationSlice'

const store = configureStore({
  reducer: combineReducers({
    authentication: authReducer,
  }),
})

export default store
