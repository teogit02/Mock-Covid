import React from 'react'
import { useRouteMatch, Link, useHistory } from 'react-router-dom'

import './menu.scss'
import { Ul, Li, ActiveLi, Button } from './../styles'
import { useDispatch, useSelector } from 'react-redux'
import { ModalActions } from './../../redux/actions'

import { checkLogin, userLogout } from './../../utils/helper'
import Modal from './../../hoc/modal'
import ControlForm from './../../hoc/controlForm'

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
  const { isModalOpen } = useSelector(state => state.reducer.modal)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLoginClick = () => {
    dispatch(ModalActions.toggleModal())
  }
  const handleLogoutClick = () => {
    userLogout()
    history.push('/news')
  }
  return (
    <div className='menu'>
      <Ul>
        <MenuItem label='Home' to='/home' exact='true' />
        <MenuItem label='News' to='/news' exact='true' />
        <MenuItem label='Map' to='/map' exact='true' />
        {/* <Button onClick={handleLoginOpen}>Login</Button> */}
        {checkLogin() ? <Button onClick={handleLogoutClick}>Logout</Button> : <Button onClick={handleLoginClick}>Login</Button>}
      </Ul>

      {isModalOpen && <Modal> <ControlForm /> </Modal>}

    </div>
  )
}

export default Menu