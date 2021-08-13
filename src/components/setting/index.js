import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useDispatch, useSelector } from 'react-redux'
import { ModalActions } from './../../redux/actions'
import { checkLogin, userLogout } from './../../utils/helper'
import Modal from './../../hoc/modal'
import ControlForm from './../../hoc/controlForm'
import settingIcon from './../../assets/icons/setting.png'
import { ThemeActions, LanguageActions } from './../../redux/actions'

function Setting() {
  const { t } = useTranslation()
  const { isModalOpen } = useSelector(state => state.reducer.modal)
  const { lang } = useSelector(state => state.reducer.lang)
  const { theme } = useSelector(state => state.reducer.theme)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLoginClick = () => {
    dispatch(ModalActions.toggleModal())
  }
  const handleLogoutClick = () => {
    userLogout()
    history.push('/news')
  }
  const handleThemeChange = () => {
    dispatch(ThemeActions.themeSwitch(theme === 'light' ? 'dark' : 'light'))
  }
  const handleLanguageChange = () => {
    dispatch(LanguageActions.languageSwitch(lang === 'vi' ? 'en' : 'vi'))
    localStorage.setItem('lang', lang === 'vi' ? 'en' : 'vi')
  }
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div onClick={handleThemeChange}>
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </div>
      </Menu.Item>
      <Menu.Item key="0">
        <div onClick={handleLanguageChange}>
          {lang === 'vi' ? 'English' : 'Viet Nam'}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        {
          checkLogin() ?
            <div onClick={handleLogoutClick}>{t('Header.Settings.Logout')}</div> :
            <div onClick={handleLoginClick}>{t('Header.Settings.Login')}</div>
        }
      </Menu.Item>
    </Menu>

  );

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']} placement='bottomRight' >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <img style={{ width: '20px', height: '20px' }} alt='' src={settingIcon} />
        </a>
      </Dropdown>
      {isModalOpen && !checkLogin() && <Modal myWidth='800' title='Sign in or Sign up'> <ControlForm /> </Modal>}
    </>
  )
}

export default Setting
