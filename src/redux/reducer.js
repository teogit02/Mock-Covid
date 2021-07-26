import { combineReducers } from 'redux'

import { LoginReducer } from './slice/login'

const reducer = combineReducers({
  login: LoginReducer,
})

export default reducer