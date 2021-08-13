import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import PropTypes from 'prop-types'

Loading.propTypes = {
  status: PropTypes.bool
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} />

function Loading(props) {
  const { status, isIcon } = props
  return (
    <div>
      <Spin spinning={status} indicator={isIcon ? antIcon : ''}>
        {props.children}
      </Spin>
    </div>
  )
}

export default Loading