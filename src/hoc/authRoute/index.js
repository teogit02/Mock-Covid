import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (true) {
          return <Component />
        } else {
          return <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
        }
      }}
    />
  )
}

export default AuthRoute