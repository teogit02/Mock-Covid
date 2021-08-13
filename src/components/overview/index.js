import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import './overview.scss'
import Loading from './../../hoc/loading'

GlobalOverview.propTypes = {
  casesYesterday: PropTypes.array
}

function GlobalOverview(props) {
  const { t } = useTranslation()
  const { casesYesterday } = props
  return (
    <div className='overview'>
      <div className='active'>
        <div className='title'>{t('HomePage.Overview.ActiveCases')}</div>
        <div className='content active-color'>
          {casesYesterday && casesYesterday[0] ? new Intl.NumberFormat().format(casesYesterday[0]) : <Loading isIcon={true} />}
        </div>
      </div>
      <div className='death'>
        <div className='title'>{t('HomePage.Overview.Deaths')}</div>
        <div className='content death-color'>
          {casesYesterday && casesYesterday[1] ? new Intl.NumberFormat().format(casesYesterday[1]) : <Loading isIcon={true} />}
        </div>
      </div>
      <div className='recover'>
        <div className='title'>{t('HomePage.Overview.Recovered')}</div>
        <div className='content recover-color'>
          {casesYesterday && casesYesterday[2] ? new Intl.NumberFormat().format(casesYesterday[2]) : <Loading isIcon={true} />}
        </div>
      </div>
    </div>
  )
}

export default GlobalOverview