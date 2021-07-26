import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Advertisement from '../advertisement'
import Menu from '../menu'
import Login from '../login'

function LayoutMain(props) {

  const { isOpenLoginForm } = useSelector(state => state.reducer.login)
  console.log('is', isOpenLoginForm)
  return (
    <div>
      <Advertisement />
      <Menu />
      { isOpenLoginForm && <Login />}
      {props.children}
    </div>
  )
}

export default LayoutMain