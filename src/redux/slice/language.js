import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lang: 'en'
}

const LanguageSlice = createSlice({
  name: 'Language',
  initialState: initialState,
  reducers: {
    languageSwitch(state, action) {
      state.lang = action.payload
    },
  }
})

const { actions, reducer } = LanguageSlice

export { actions as LanguageActions, reducer as LanguageReducer }
