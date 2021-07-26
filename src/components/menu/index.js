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
        <MenuItem label='H' to='/login' exact='true' />
        <MenuItem label='News' to='/news' exact='true' />
        <MenuItem label='Features' to='/feature' exact='true' />
        <MenuItem label='LifeStyle' to='/life' exact='true' />
        <MenuItem label='Business' to='/business' exact='true' />
        <MenuItem label='Sports' to='/sport' exact='true' />
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