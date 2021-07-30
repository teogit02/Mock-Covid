import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './menu.scss'
import {
  Ul, Li, ActiveLi,
  Button
} from './../styles'

import { LoginActions } from './../../redux/actions'

function MenuItem({ label, to, exact }) {
  let match = useRouteMatch({
    path: to,
    exact: exact
  })
  return (
    <div className={match ? 'active' : ''}>
      <Link to={to} style={{ textDecoration: 'none' }}>
        {/* <li className={match}>{label}</li> */}
        {
          match ? <ActiveLi>{label}</ActiveLi> : <Li>{label}</Li>
        }
      </Link>
    </div>
  )
}

function Menu() {

  const dispatch = useDispatch()
  const handleLoginOpen = () => {
    console.log('open form login')
    dispatch(LoginActions.toggleFormLogin())
  }
  return (
    <div className='menu'>
      <Ul>
        <MenuItem label='Home' to='/home' exact='true' />
        <MenuItem label='News' to='/news' exact='true' />
        <MenuItem label='Map' to='/map' exact='true' />
        {/* <div className='btn-login' onClick={handleLoginOpen}>Login</div> */}
        <Button onClick={handleLoginOpen}>Login</Button>
      </Ul>
      {/* <div>Search</div> */}
      {/* {
        isOpenLogin && <Login />
      } */}
    </div>
  )
}

export default Menu