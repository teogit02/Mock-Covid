import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (true) {
          return <Component />
        } else {
          return <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        }
      }}
    />
  )
}

export default PrivateRoute