import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

import LayoutMain from './../../hoc/layout/main'
import './home.scss'
import Map from './../../components/map'
import Overview from './../../components/overview'
import Chart from './../../components/chart'
import DataTable from './../../components/dataTable'

import { getHistory, getDataAllCountries } from './../../components/axios'

function Home() {
  const { t } = useTranslation()
  const dateFormat = 'D/M/YYYY'
  const [countries, setCountries] = useState([])
  const [isMapLoading, setIsMapLoading] = useState(true)
  const [isChartLoading, setIsChartLoading] = useState(true)
  const [isDataTableLoading, setIsDataTableLoading] = useState(true)
  const [mapData, setMapData] = useState([])
  const [casesYesterday, setCasesYesterday] = useState(true)
  const [casesHistory, setCasesHistory] = useState()

  useEffect(() => {
    getDataAllCountries().then(res => {

      if (res.status === 200) {
        setMapData(
          res.data.map((countryItem) => [
            countryItem.countryInfo.iso3,
            countryItem.active,
            countryItem.countryInfo.flag
          ])
        )
        setIsMapLoading(false)

        setCountries(
          res.data.map((countryItem) => {
            return {
              key: countryItem.countryInfo._id,
              countries: {
                flag: countryItem.countryInfo.flag,
                name: countryItem.country
              },
              cases: countryItem.cases.toLocaleString(),
              deaths: countryItem.deaths.toLocaleString(),
              recovered: countryItem.recovered.toLocaleString(),
              todayCases: countryItem.todayCases.toLocaleString(),
              todayDeaths: countryItem.todayDeaths.toLocaleString()
            }
          })
        )
        setIsDataTableLoading(false)
      }
    })
    getHistory('all', 1).then(res => {
      if (res.status === 200) {
        setCasesYesterday(Object.values(res.data).map(item =>
          Object.values(item).toString()
        ))
      }
    })
    getHistory().then(res => {
      if (res.status === 200) {
        const cases = Object.entries(res.data.cases).map(item => {
          const day = new Date(item[0])
          return { x: moment(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`, dateFormat), y: item[1] }
        })
        const deaths = Object.entries(res.data.deaths).map(item => {
          const day = new Date(item[0])
          return { x: moment(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`, dateFormat), y: item[1] }
        })
        const recovered = Object.entries(res.data.recovered).map(item => {
          const day = new Date(item[0])
          return { x: moment(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`, dateFormat), y: item[1] }
        })
        setCasesHistory({
          cases,
          deaths,
          recovered
        })
        setIsChartLoading(false)
      }
    })
  }, [])

  return (
    <LayoutMain>
      <div className='home-page'>
        <Map data={mapData} loading={isMapLoading} />
        <Overview casesYesterday={casesYesterday} />
        <br />
        <Chart casesHistory={casesHistory} idChartMain='chartGlobal' title={t('HomePage.Chart.Title')} loading={isChartLoading} />
        {/* <Calendar /> */}
        <br />
        <DataTable data={countries} loading={isDataTableLoading} />
      </div>
    </LayoutMain>
  )
}

export default Home