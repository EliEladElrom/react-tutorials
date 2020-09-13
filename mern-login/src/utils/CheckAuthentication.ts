// src/utils/CheckAuthentication.ts
import store from '../redux/store'
import { SET_AUTHENTICATED } from '../redux/types'
export const CheckAuthentication = () => {
  console.log('CheckAuthentication.ts :: CheckAuthentication')
  const user = 'user' in localStorage ? JSON.parse(localStorage.user) : null
  console.log('CheckAuthentication.ts :: CheckAuthentication :: user :: ' + JSON.stringify(user))
  if (user) {
    console.log('CheckAuthentication.ts :: CheckAuthentication :: user :: SET_AUTHENTICATED')
    store.dispatch({ type: SET_AUTHENTICATED })
  } else {
    console.log('CheckAuthentication.ts :: CheckAuthentication :: user :: SET_AUTHENTICATED false')
  }
}
