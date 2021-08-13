import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './menu.scss'
import { Ul, Li, ActiveLi } from './../styles'
import Setting from './../setting'

function MenuItem({ label, to, exact }) {
  let match = useRouteMatch({
    path: to,
    exact: exact
  })
  return (
    <div className={match ? 'active' : ''}>
      <Link to={to} style={{ textDecoration: 'none' }}>
        {
          match ? <ActiveLi>{label}</ActiveLi> : <Li>{label}</Li>
        }
      </Link>
    </div>
  )
}
function Menu() {
  const { t } = useTranslation()
  return (
    <div className='menu'>
      <Ul>
        <MenuItem label={t('Header.Menu.Home')} to='/home' exact='true' />
        <MenuItem label={t('Header.Menu.News')} to='/news' exact='true' />
        <div className='setting'>
          <Setting />
        </div>
      </Ul>
    </div>
  )
}

export default Menu