import React, { useState, useEffect } from 'react'

import './map.scss'
import MapWorld from './../../components/mapWorld'

function Map() {
  const [places, setPlaces] = useState([])
  const [activeCountry, setActiveCountry] = useState('')
  const url = 'https://disease.sh/v3/covid-19/countries'

  useEffect(() => {
    // load data
    fetch(url).then(res => res.json())
      .then((data) => setPlaces(data));
  }, []);

  const handleCountryReceive = (country) => {
    setActiveCountry(country)
  }

  return (
    <div className='map-page'>
      <div className='map'>
        <MapWorld places={places} countryCB={handleCountryReceive} />

        <div className='map-information'>
          Map information
        {
            activeCountry !== '' ?
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Continent: {activeCountry.continent}</p>
                <p>Country: {activeCountry.country}</p>
                <p>Case: {activeCountry.cases}</p>
                <p>Recovered: {activeCountry.recovered}</p>
                <p>Deaths: {activeCountry.deaths}</p>
              </div> : ''
          }
        </div>
      </div>
    </div>
  )
}

export default Map

