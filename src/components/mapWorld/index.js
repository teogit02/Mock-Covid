import React from 'react'
import Globe from 'react-globe.gl';

import './map.scss'

function Map(props) {
  const { places, countryCB } = props
  return (
    <div>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        //backgroundColor='white'
        //width='50'
        //height='500'

        labelsData={places}
        labelLat={d => d.countryInfo.lat}
        labelLng={d => d.countryInfo.long}
        labelText={d => d.country}
        labelSize={d => (Math.sqrt(d.cases) * 4e-4) * 1.5}
        labelDotRadius={d => (Math.sqrt(d.cases) * 4e-4) * 1.5}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        // labelResolution={2}
        onLabelClick={(d) => {
          //setActiveCountry(d)
          countryCB(d)
          //console.log(d)
        }}
      />
    </div>
  )
}

export default Map