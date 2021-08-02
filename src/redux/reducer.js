import { combineReducers } from 'redux'

import { ModalReducer } from './slice/modal'

const reducer = combineReducers({
  modal: ModalReducer
})

export default reducer