import React, { useState } from 'react'
import { Button, Form } from 'antd'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

import './login.scss'
import loginLogo from './../../assets/imgs/login.png'

import { ModalActions } from './../../redux/actions'
import { useDispatch } from 'react-redux'
import { userLogin } from './../../utils/helper'

Login.propTypes = {
  onCloseLoginCb: PropTypes.func,
  onChangeLoginCb: PropTypes.func
};

function Login(props) {
  const { onCloseLoginCb, onChangeLoginCb } = props
  const history = useHistory()
  const dispatch = useDispatch()
  const [loadings, setLoadings] = useState([])
  const enterLoading = index => {
    const newLoadings = [...loadings]
    newLoadings[index] = true
    setLoadings(newLoadings)
  }
  const onFinish = (values) => {
    enterLoading(1)
    // Fake call Api
    setTimeout(() => {
      const newLoadings = [...loadings]
      newLoadings[1] = false
      setLoadings(newLoadings)
      if (userLogin(values)) {
        dispatch(ModalActions.toggleModal())
        history.push('/home')
      } else {
        alert("Fail")
      }
    }, 1500);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login'>
      <img alt='' src={loginLogo} />
      <div className='login-form'>
        <div className='title'>Login now</div>

        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className='login-field field--username'
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Email invalid' }
            ]}
          >
            <input placeholder='Enter Your Email' autoComplete='off' id="error" />
          </Form.Item>
          <Form.Item
            className='login-field field--password'
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <input type='password' placeholder='Enter Your Password' autoComplete='off' />
          </Form.Item>
          <Form.Item className='login-control' >
            <Button
              type='primary'
              htmlType="submit"
              loading={loadings[1]}
              block
              shape="round"
            >
              Login
            </Button>
            or
            <Button Button
              type='dashed'
              block
              shape="round"
              onClick={() => onCloseLoginCb()}
            >
              Register
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div >
  )
}

export default Login