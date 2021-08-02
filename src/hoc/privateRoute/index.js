import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { checkLogin } from './../../utils/helper'
import { ModalActions } from './../../redux/actions'

function PrivateRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch()
  return (
    <Route
      {...rest}
      render={props => {
        if (checkLogin()) {
          return <Component />
        } else {
          dispatch(ModalActions.toggleModal())
          return (
            <Redirect
              to={{
                pathname: '/news',
                state: { from: props.location }
              }}
            />
          )
        }
      }}
    />
  )
}

export default PrivateRoute