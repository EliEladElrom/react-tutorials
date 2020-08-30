import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import LoginPage from './pages/LoginPage/LoginPage'
import './AppRouter.scss'
import { ToastNotification } from './components/Toast/ToastNotification'

function AppRouter() {
  return (
    <Router>
      <Provider store={store}>
        <ToastNotification />
        <Switch>
          <Route exact path="/LoginPage" component={LoginPage} />
        </Switch>
        <div className="footer">
        </div>
      </Provider>
    </Router>
  )
}

export default AppRouter
