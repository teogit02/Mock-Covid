import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import reducer from './reducer'

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: { reducer },
  middleware
})

export default store