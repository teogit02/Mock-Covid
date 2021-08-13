import React, { useMemo } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import world from "@highcharts/map-collection/custom/world.geo.json"
import map from 'highcharts/modules/map'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import './map.scss'

import Loading from './../../hoc/loading'
import { useSelector } from 'react-redux'

Map.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool
}
map(Highcharts)
function Map(props) {
  const { t } = useTranslation()
  const { data, loading } = props
  const { theme } = useSelector(state => state.reducer.theme)
  const options = {
    chart: {
      map: world,
      height: 500,
      backgroundColor: 'transparent',
      borderWidth: 0,
      animation: {
        duration: 100,
      }
    },
    loading: {
      hideDuration: 1000,
      showDuration: 1000,
    },
    title: {
      text: t('HomePage.Map.Title'),
      style: { "font-weight": "bold", "color": theme === "light" ? "black" : "white" }
    },
    tooltip: {
      borderWidth: 0,
      padding: 10,
      shadow: true,
      useHTML: true,
      pointFormat:
        `<div>
            <span/> <img style="width:25px; height:25px" src={point.flag} /> <span>
            </span></span> {point.name}<br>
            <span style="font-size:20px; font-weight: bold">{point.value} <span style="color: lightseagreen">cases</span></span>
          </div>
        `
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        align: "left",
        x: 10,
      },
      enableDoubleClickZoomTo: false,
    },
    legend: {
      title: {
        text: t('HomePage.Map.Legends.Title'),
        style: {
          color: "lightseagreen",
        },
      },
      floating: true,
      align: "left",
      verticalAlign: "bottom",
      layout: "vertical",
      //layout: "horizontal",
      backgroundColor:
        (Highcharts.defaultOptions &&
          Highcharts.defaultOptions.legend &&
          Highcharts.defaultOptions.legend.backgroundColor) ||
        "transparent",
      symbolRadius: 0,
      borderWidth: 0,
    },
    colorAxis: {
      dataClasses: [
        {
          to: 1000,
        },
        {
          from: 1000,
          to: 10000,
        },
        {
          from: 10000,
          to: 100000,
        },
        {
          from: 100000,
          to: 500000,
        },
        {
          from: 500000,
          to: 1000000,
        },
        {
          from: 1000000,
          to: 1500000,
        },
        {
          from: 1500000,
        },
      ],
    },
    series: [
      {
        data: data,
        keys: ["iso-a3", "value", "flag"],
        joinBy: "iso-a3",
        name: "Active cases",
        states: {
          hover: {
            color: "#76949F",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.properties.postal}",
        },
      },
    ],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            minWidth: 1200,
          },
          chartOptions: {
            legend: {
              floating: true,
              layout: "vertical",
            },
          },
        },
      ],
    }

  }
  return (
    <div className='map'>
      <Loading status={loading}>
        <HighchartsReact
          //highcharts={Highcharts}
          constructorType={'mapChart'}
          options={options}
        />
      </Loading>
    </div>
  )
}

export default Map