// src/AppRouter.tsx

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import LoginPage from './pages/LoginPage/LoginPage'
import { ToastNotification } from './components/Toast/ToastNotification'

function AppRouter() {
  return (
    <Router>
      <Provider store={store}>
        <ToastNotification />
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Provider>
    </Router>
  )
}

export default AppRouter
