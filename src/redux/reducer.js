import { combineReducers } from 'redux'

import { ModalReducer } from './slice/modal'
import { ThemeReducer } from './slice/theme'
import { LanguageReducer } from './slice/language'

const reducer = combineReducers({
  theme: ThemeReducer,
  modal: ModalReducer,
  lang: LanguageReducer,
})

export default reducer