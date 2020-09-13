import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userSlice from '../features/Authentication/userSlice'
import userUISlice from '../features/Authentication/userUISlice'
import notificationSlice from '../features/Notification/notificationSlice'
const initialState = {}
const middleware = [thunk]
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}
const reducer = combineReducers({
  notification: notificationSlice,
  user: userSlice,
  userUI: userUISlice,
})
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any
  )
)
export default store
