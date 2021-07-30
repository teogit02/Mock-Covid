import React from 'react'
import { Table } from 'antd';

import './countries.scss'
import 'antd/dist/antd.css';

function Countries(props) {
  const { dataRows } = props
  const columns = [
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Case',
      dataIndex: 'cases',
      key: 'cases',
    },
    {
      title: 'Recover',
      dataIndex: 'recovered',
      key: 'recovered',
    },
    {
      title: 'Death',
      dataIndex: 'deaths',
      key: 'deaths',
    },
  ];

  return (
    <div className=''>
      <Table
        columns={columns}
        dataSource={dataRows}
      />
    </div>
  )
}

export default Countries