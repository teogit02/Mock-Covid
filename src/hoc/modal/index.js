import React, { useState } from 'react'
import { Modal as ModalAntd } from 'antd'
import PropTypes from 'prop-types'

import './modal.scss'
import { useDispatch } from 'react-redux'
import { ModalActions } from './../../redux/actions'

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  title: PropTypes.string,
  myWidth: PropTypes.string,
}

function Modal(props) {
  const { title, myWidth } = props
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(true)

  const handleCancel = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      dispatch(ModalActions.toggleModal())
    }, 500)
  };

  return (
    <ModalAntd title={title} visible={isModalVisible} onCancel={handleCancel} footer={null} width={myWidth ? parseInt(myWidth) : '95%'}>
      {props.children}
    </ModalAntd>
  )
}

export default Modal