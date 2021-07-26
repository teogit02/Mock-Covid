import React from 'react'

import './login.scss'
import { useDispatch } from 'react-redux'
import { LoginActions } from './../../redux/actions'

function Login() {
  const dispatch = useDispatch()
  return (
    <div className='login-container'>
      <div className='outline' onClick={() => dispatch(LoginActions.toggleFormLogin())}></div>
      <div className='login'>
        <div className='login__title'>Title Login</div>
        <div className='login__form'>
          <div className='form'>
            <div className='form-group'>
              <label>Username</label>
              <input type='text' />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type='password' />
            </div>
            <div className='form-control'>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login