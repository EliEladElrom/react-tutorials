import {
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
} from '../types'
import axios from 'axios'
import store from '../store'
import { users } from '../../model'
import { setNotification } from '../../features/Notification/notificationSlice'
import { notificationTypesEnums } from '../../features/Notification/notificationEnums'
export const loginUser = (userData: users, history: any) => (dispatch: any) => {
  console.log('userActions.ts :: loginUser :: userData :: ' + JSON.stringify(userData))
  dispatch({ type: LOADING_UI })
  axios
    .get(
      'http://localhost:8081/validate?email=' + userData.email + '&password=' + userData.password
    )
    .then((res) => {
      console.log('userActions.ts :: loginUser :: results: ' + JSON.stringify(res.data))
      const status = `${res.data.status}`
      const id: number = Math.floor(Math.random() * 101 + 1)
      console.log('userActions.ts :: loginUser :: status: ' + JSON.stringify(status))
      if (status === 'error') {
        console.log('userActions.ts :: loginUser :: ERROR: ' + JSON.stringify(res.data))
        dispatch(
          setNotification({
            id: id,
            type: notificationTypesEnums.Fail,
            description: 'Incorrect credentials please try again!',
          })
        )
        dispatch({
          type: SET_ERRORS,
          payload: res.data.error_message,
        })
      } else {
        dispatch(
          setNotification({
            id: id,
            type: notificationTypesEnums.Success,
            description: 'Login Success!',
          })
        )
        localStorage.setItem('user', JSON.stringify(res.data.params))
        dispatch({ type: CLEAR_ERRORS })
        console.log('userActions.ts :: success - redirecting to members page after login success')
        store.dispatch({ type: SET_AUTHENTICATED })
        history.push('/Members')
      }
    })
    .catch((err) => {
      console.log(
        'userActions.ts :: Login request error check http://localhost:8081/validate :: ' + err
      )
      const id: number = Math.floor(Math.random() * 101 + 1)
      dispatch(
        setNotification({
          id: id,
          type: notificationTypesEnums.Fail,
          description: 'Error notice: ' + err,
        })
      )
      dispatch({
        type: SET_ERRORS,
        payload: err,
      })
    })
}
export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem('user')
  dispatch({
    type: SET_UNAUTHENTICATED,
  })
  window.location.href = '/Login'
}
