// src/utils/GuestsRoute.tsx
import React, { FunctionComponent } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
//redux stuff
import { connect } from 'react-redux'
interface MyRouteProps extends RouteProps {
  component: any
  authenticated: boolean
  rest?: any
}
const GuestsRoute: FunctionComponent<MyRouteProps> = ({
  component: Component,
  authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (authenticated ? <Redirect to="/Members" /> : <Component {...props} />)}
  />
)
const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
})
export default connect(mapStateToProps)(GuestsRoute)
