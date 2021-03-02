// src/AppRouter.tsx

import React, { FunctionComponent, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
// @ts-ignore
// eslint-disable-next-line import/extensions
import { withQuicklink } from 'quicklink/dist/react/hoc.js'
import App from './App'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

// Regular loading
// import MyPage from './pages/MyPage/MyPage'

// Lazy loading
const MyPage = lazy(() => import('./pages/MyPage/MyPage'))

const options = {
  origins: []
}
const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <ScrollToTop />
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
            {/* without Quicklink
            <Route exact path="/MyPage" component={MyPage} />
            */}
            <Route exact path="/MyPage" component={withQuicklink(MyPage, options)} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
  )
}

export default AppRouter
