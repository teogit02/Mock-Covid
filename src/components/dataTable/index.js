import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { Table } from "antd"
import Column from "antd/lib/table/Column"
import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'
import Modal from './../../hoc/modal'
import { ModalActions } from './../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import './dataTable.scss'
import Loading from './../../hoc/loading'
import CountryDetail from './../countryDetail'

DataTable.propTypes = {
  data: PropTypes.object,
  loadding: PropTypes.bool
}

function DataTable(props) {
  const { t } = useTranslation()
  const { data, loading } = props
  const { isModalOpen } = useSelector(state => state.reducer.modal)
  const [country, setCountry] = useState({})
  const dispatch = useDispatch()
  const [dataTable, setDataTable] = useState(data)
  useEffect(() => {
    if (data.length > 0) {
      setDataTable(data)
    }
  }, [data,])
  const handleSelectChange = selectedOption => {
    if (selectedOption) {
      setDataTable([selectedOption])
    } else {
      setDataTable(data)
    }
  }
  const handleCountryDetail = (country) => {
    setCountry(country)
    dispatch(ModalActions.toggleModal())

  }
  return (
    <div className='data-table'>
      <Loading status={loading}>
        <div className='title'>{t('HomePage.DataTable.Title')}</div>
        {
          isModalOpen &&
          <Modal title={<><img className='img' src={country.flag} /> {country.name}</>} >
            <CountryDetail country={country} />
          </Modal>
        }
        <div className='search'>
          <Select
            styles={{
              menu: (provided) => ({ ...provided, zIndex: 9999 }),
              option: (styles, { isDisabled, isFocused, isSelected }) => {
                return {
                  ...styles,
                  backgroundColor: isDisabled
                    ? null
                    : isSelected
                      ? '#185ADB'
                      : isFocused
                        ? '#d9e2ec'
                        : null,
                  color: isDisabled ? '#ccc' : isSelected ? 'white' : 'black',
                  cursor: isDisabled ? 'not-allowed' : 'default',
                };
              },
            }}
            onChange={handleSelectChange}
            options={data && data.map(item => {
              return { ...item, value: item.countries.name, label: item.countries.name }
            })}
            isClearable={true}
          />
        </div>
        <Table
          dataSource={dataTable}
          pagination={{ responsive: true }}
          scroll={{ x: 768 }}
          rowClassName='row'
        >
          <Column
            className='column'
            title=""
            dataIndex="countries"
            key="flag"
            render={(data) => (
              <img className='flag' alt={data.flag} src={data.flag} />
            )}
            fixed="left"
            ellipsis={true}
            width="70px"
          />
          <Column
            className='column'
            title={t('HomePage.DataTable.TableHead.Country')}
            dataIndex="countries"
            key="country"
            render={(data) => (
              <div
                className='country-name'
                onClick={() => handleCountryDetail(data)}
              >
                {data.name}
              </div>
            )}
            width="180px"
          />
          <Column
            editable='false'
            className='column'
            title={t('HomePage.DataTable.TableHead.TodayCases')}
            dataIndex="todayCases"
            key="todayCases"
            sorter={(a, b) => parseInt(a.todayCases) - parseInt(b.todayCases)}
            render={(data) => data}
          />
          <Column
            className='column'
            title={t('HomePage.DataTable.TableHead.TodayDeaths')}
            dataIndex="todayDeaths"
            key="todayDeaths"
            sorter={(a, b) => parseInt(a.todayDeaths) - parseInt(b.todayDeaths)}
            render={(data) => data}
          />
          <Column
            className='column'
            title={t('HomePage.DataTable.TableHead.TotalCases')}
            dataIndex="cases"
            key="cases"
            sorter={(a, b) => parseInt(a.cases) - parseInt(b.cases)}
            render={(data) => data}
          />
          <Column
            className='column'
            title={t('HomePage.DataTable.TableHead.TotalDeaths')}
            dataIndex="deaths"
            key="deaths"
            sorter={(a, b) => parseInt(a.deaths) - parseInt(b.deaths)}
            render={(data) => data}
          />
          <Column
            className='column'
            title={t('HomePage.DataTable.TableHead.TotalRecovered')}
            dataIndex="recovered"
            key={() => { Math.random().toString(36).substr(2) }}
            sorter={(a, b) => parseInt(a.recovered) - parseInt(b.recovered)}
            render={(data) => data}
          />
        </Table>
      </Loading>
    </div >
  )
}

export default DataTable