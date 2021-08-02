import React, { useState } from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'

import './modalLogin.scss'
import { useDispatch } from 'react-redux'
import { ModalActions } from './../../redux/actions'

ModalLogin.propTypes = {
  isModalOpen: PropTypes.bool,
}

function ModalLogin(props) {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(true)

  const handleCancel = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      dispatch(ModalActions.toggleModal())
    }, 500)
  };

  return (
    <Modal title="Sign in - Sign up" visible={isModalVisible} onCancel={handleCancel} footer={null} width={800} >
      {props.children}
    </Modal >
  )
}

export default ModalLogin