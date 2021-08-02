import React from 'react'

import Advertisement from '../../components/advertisement'
import Menu from '../../components/menu'
// import Login from '../login'

function LayoutMain(props) {
  return (
    <div>
      <Advertisement />
      <Menu />
      {props.children}
    </div>
  )
}

export default LayoutMain