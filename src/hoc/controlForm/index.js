import React, { useState } from 'react'

import Login from './../../components/login'
import Register from './../../components/register'

function ControlForm() {
  const [activeForm, setActiveForm] = useState('login')
  const handleActiveFormChange = () => {
    activeForm === 'login' ? setActiveForm('register') : setActiveForm('login')
  }
  return (
    <div>
      {activeForm === 'login' ?
        <Login onCloseLoginCb={handleActiveFormChange} /> :
        <Register onCloseRegisterCb={handleActiveFormChange} />}
    </div>
  )
}

export default ControlForm