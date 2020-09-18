// src/AppRouter.tsx

import React, { FunctionComponent, useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import { RecoilRoot } from 'recoil'
import ContactPage from './pages/ContactPage/ContactPage'
import BooksPage from './pages/BooksPage/BooksPage'

const AppRouter: FunctionComponent = () => {
  useEffect(() => {
    // TODO
  }, [])
  return (
    <Router>
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/books" component={BooksPage} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
  )
}

export default AppRouter
