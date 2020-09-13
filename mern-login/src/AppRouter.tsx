// src/AppRouter.tsx

import React, { FunctionComponent, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import LoginPage from './pages/LoginPage/LoginPage'
import { ToastNotification } from './components/Toast/ToastNotification'
import GuestsRoute from './utils/GuestsRoute'
import MembersRoute from './utils/MembersRoute'
import MembersPage from './pages/MembersPage/MembersPage'
import { CheckAuthentication } from './utils/CheckAuthentication'
import App from './App'

const AppRouter: FunctionComponent = () => {
  useEffect(() => {
    CheckAuthentication()
  }, [])
  return (
    <Router>
      <Provider store={store}>
        <ToastNotification />
        <Switch>
          <Route exact path="/" component={App} />
          <GuestsRoute exact path="/Login" component={LoginPage} />
          <MembersRoute exact path="/Members" component={MembersPage} />
        </Switch>
      </Provider>
    </Router>
  )
}

export default AppRouter
