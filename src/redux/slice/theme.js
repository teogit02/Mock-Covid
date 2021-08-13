import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: "light",
}

const ThemeSlice = createSlice({
  name: 'Theme',
  initialState: initialState,
  reducers: {
    themeSwitch(state, action) {
      //console.log('payload', payload)
      state.theme = action.payload
    },
  }
})

const { actions, reducer } = ThemeSlice

export { actions as ThemeActions, reducer as ThemeReducer }
