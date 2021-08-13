import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { DatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import 'antd/dist/antd.css'
import './chart.scss'
import { useEffect } from 'react'
import Loading from './../../hoc/loading'

Chart.propTypes = {
  casesHistory: PropTypes.object,
  idChartMain: PropTypes.string,
  title: PropTypes.string,
  loading: PropTypes.bool
}

function Chart(props) {
  const { t } = useTranslation()
  const { casesHistory, idChartMain, title, loading } = props
  const { theme } = useSelector(state => state.reducer.theme)
  const [localLoading, setLocalLoading] = useState(false)
  const dateFormat = 'D/M/YYYY'
  const [cases, setCases] = useState([])
  const [deaths, setDeaths] = useState([])
  const [recovered, setRecovered] = useState([])
  const [filter, setFilter] = useState(0)
  const [from, setFrom] = useState(moment('22/1/2020', dateFormat))
  const [to, setTo] = useState(moment(new Date(new Date().setDate(new Date().getDate() - 1)), dateFormat))

  useEffect(() => {
    if (casesHistory) {
      setCases(casesHistory.cases)
      setDeaths(casesHistory.deaths)
      setRecovered(casesHistory.recovered)
    }
  }, [casesHistory])

  useEffect(() => {
    setLocalLoading(true)
    setTimeout(() => {
      //console.log(casesHistory)      
      if (casesHistory && casesHistory.cases) {
        const idxFrom = casesHistory.cases.findIndex(item => item.x._i === from._i)
        const idxTo = casesHistory.cases.findIndex(item => item.x._i === to._i)
        setCases([...casesHistory.cases.slice(idxFrom, idxTo === -1 ? casesHistory.cases.length : idxTo)])
        setDeaths([...casesHistory.deaths.slice(idxFrom, idxTo === -1 ? casesHistory.cases.length : idxTo)])
        setRecovered([...casesHistory.recovered.slice(idxFrom, idxTo === -1 ? casesHistory.cases.length : idxTo)])
      }
      setLocalLoading(false)
    }, 300)
    //console.log('from, to', from, to)
  }, [from, to])
  const handleDateChange = (type, date, dateString) => {
    if (type === 'from') {
      setFrom(moment(dateString, dateFormat))
    } else {
      setTo(moment(dateString, dateFormat))
    }
  }
  const series = [{
    name: t('HomePage.Chart.Legends.Cases'),
    data: cases
  }, {
    name: t('HomePage.Chart.Legends.Deaths'),
    data: deaths
  }, {
    name: t('HomePage.Chart.Legends.Recovered'),
    data: recovered
  }]
  const seriesLine = [{
    name: '',
    data: cases
  }]
  const options = {
    chart: {
      id: idChartMain,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: false,
          delay: 1500
        },
        dynamicAnimation: {
          enabled: true,
          speed: 1000
        }
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: (value) => { return new Intl.NumberFormat().format(value) }
      }
    },
    tooltip: {
      theme: theme,
      x: {
        format: 'dd/MM/yyyy',
        formatter: (date => {
          return (`${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`)
        })
      },
    },
    colors: ['#F8B612', '#DC1C18', '#59C9A5'],
  }
  const handleCasesUpdate = (filter) => {
    switch (filter) {
      case 0:
        setFilter(filter)
        setFrom(casesHistory.cases[0].x)
        setTo(casesHistory.cases[casesHistory.cases.length - 1].x)
        break
      case filter:
        setFilter(filter)
        setFrom(casesHistory.cases[casesHistory.cases.length - 30 * filter].x)
        setTo(casesHistory.cases[casesHistory.cases.length - 1].x)
        break
      default:
        return
    }
  }
  const optionsLine = {
    chart: {
      id: 'chart1',
      brush: {
        target: idChartMain,
        enabled: true
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date(cases && cases[0] ? cases[0].x : '').getTime(),
          max: new Date(cases && cases[cases.length - 1] ? cases[cases.length - 1].x : '').getTime()
        }
      },
    },
    colors: ['red'],
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 2,
      show: false
    },
  }
  return (
    <div className='chart'>
      <Loading status={loading ? loading : localLoading}>
        <div className='title'>{title}</div>
        <div className='chart-toolbar'>
          <button className={filter === 1 ? 'active' : ''} onClick={() => handleCasesUpdate(1)} type="">1M</button>
          <button className={filter === 3 ? 'active' : ''} onClick={() => handleCasesUpdate(3)} type="">3M</button>
          <button className={filter === 6 ? 'active' : ''} type="" onClick={() => handleCasesUpdate(6)}>6M</button>
          <button className={filter === 9 ? 'active' : ''} type="" onClick={() => handleCasesUpdate(9)}>YTD</button>
          <button className={filter === 12 ? 'active' : ''} type="" onClick={() => handleCasesUpdate(12)}>1Y</button>
          <button className={filter === 0 ? 'active' : ''} type="" onClick={() => handleCasesUpdate(0)}>ALL</button>
        </div>

        <div className='date-range'>
          <label>{t('HomePage.Chart.From')}:</label>
          <DatePicker
            onChange={(date, dateString) => handleDateChange('from', date, dateString)}
            className='date'
            size={'small'}
            dropdownClassName='date-dropdown'
            allowClear={false}
            defaultValue={from}
            value={from}
            format={dateFormat}
            disabledDate={(currentDate) => currentDate <= moment('22/1/2020', dateFormat)}
          />
          <label>{t('HomePage.Chart.To')}:</label>
          <DatePicker
            onChange={(date, dateString) => handleDateChange('to', date, dateString)}
            dropdownClassName='date-dropdown'
            className='date'
            size={'small'}
            allowClear={false}
            defaultValue={to}
            value={to}
            format={dateFormat}
            disabledDate={(currentDate) => currentDate >= new Date()}
          />
        </div>
        <ReactApexChart options={options} series={series} type='area' height={300} />
        <div style={{ marginTop: '-20px' }}>
          <ReactApexChart options={optionsLine} series={seriesLine} type='line' height={90} />
        </div>
      </Loading >
    </div>
  )
}

export default Chart