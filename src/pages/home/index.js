import React, { useState, useEffect } from 'react'

import './home.scss'
import { Input } from './../../components/styles'
import Chart from './../../components/chart'
import Countries from './../../components/countries'

function Home() {

  const url = 'https://disease.sh/v3/covid-19/countries'
  const [dataRows, setDataRows] = useState([])
  // Data Get from store
  // Test
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDataRows(data)
      })
  }, [])

  return (
    <div className='home-page'>
      <div className='search'>
        <div className='search--country'>
          <Input placeholder='Search' />
        </div>
      </div>
      <br />
      <div className='countries'>
        <div className='countries--table'>
          {/* <Countries dataRows={dataRows} /> */}
        </div>
      </div>
      <br />

      <div className='status'>
        <div className='status-case'>Cases:1000</div>
        <div className='status-recover'>Recovered: 5000</div>
        <div className='status-death'>Deaths: 1000</div>
      </div>

      {/* <Chart /> */}
    </div>
  )
}

export default Home