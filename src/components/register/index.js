import React, { useState } from 'react'
import { Button, Form } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types';

import './register.scss'
import registerLogo from './../../assets/imgs/register.png'
import { userRegister } from './../../utils/helper'

Register.propTypes = {
  onCloseRegisterCb: PropTypes.func
}

function Register(props) {
  const { onCloseRegisterCb } = props
  const [loadings, setLoadings] = useState([])
  const enterLoading = index => {
    const newLoadings = [...loadings]
    newLoadings[index] = true
    setLoadings(newLoadings)
  };
  const onFinish = (values) => {
    enterLoading(1)
    // Fake call Api
    setTimeout(() => {
      const newLoadings = [...loadings]
      newLoadings[1] = false
      setLoadings(newLoadings)
      userRegister({ email: values.email, password: values.password })
      onCloseRegisterCb()
    }, 1500);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='register'>
      <img alt='' src={registerLogo} />
      <div className='register-form'>
        <div className='title'>Register now</div>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className='register-field field--username'
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Email invalid' }
            ]}
          >
            <input placeholder='Your email' />
          </Form.Item>

          <Form.Item
            className='register-field field--password'
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}
          >
            <input placeholder='Your password' type='password' />
          </Form.Item>

          <Form.Item
            className='register-field field--password'
            label="Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}

          >
            <input placeholder='Confirm password' type='password' />
          </Form.Item>

          <Form.Item className='register-control'>
            <Button
              type='primary'
              htmlType="submit"
              loading={loadings[1]}
              //onClick={() => enterLoading(1)}
              block
              shape="round"
            >
              Register
            </Button>
            or
            <Button
              type='dashed'
              block
              shape="round"
              onClick={() => onCloseRegisterCb()}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register