import React, { useEffect, useState } from 'react'

import Chart from './../../components/chart'
import Overview from './../../components/overview'
import moment from 'moment'
import { getHistory } from './../../components/axios'
import PropTypes from 'prop-types'

import './countryDetail.scss'

CountryDetail.propTypes = {
  country: PropTypes.object
}

function CountryDetail(props) {
  const { country } = props
  const dateFormat = 'D/M/YYYY'
  const [casesHistory, setCasesHistory] = useState([])
  const [casesYesterday, setCasesYesterday] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getHistory(country.name, 1).then(res => {
      if (res.status === 200) {
        setCasesYesterday(Object.values(res.data.timeline).map(item =>
          Object.values(item).toString()
        ))
      }
    })
    getHistory(country.name).then(res => {
      if (res.status === 200) {
        const cases = Object.entries(res.data.timeline.cases).map(item => {
          const day = new Date(item[0])
          return { x: moment(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`, dateFormat), y: item[1] }
        })
        const deaths = Object.entries(res.data.timeline.deaths).map(item => {
          const day = new Date(item[0])
          return { x: moment(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`, dateFormat), y: item[1] }
        })
        const recovered = Object.entries(res.data.timeline.recovered).map(item => {
          const day = new Date(item[0])
          return { x: moment(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`, dateFormat), y: item[1] }
        })
        setCasesHistory({
          cases,
          deaths,
          recovered
        })
        setIsLoading(false)
      }
    })
  }, [])
  return (
    <div className='country-detail'>
      <Overview casesYesterday={casesYesterday} />
      <Chart casesHistory={casesHistory} idChartMain='chartDetail' title='Detail Chart' loading={isLoading} />
    </div>
  )
}

export default CountryDetail