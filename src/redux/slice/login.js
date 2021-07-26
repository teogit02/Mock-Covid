import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenLoginForm: false
}

const LoginSlice = createSlice({
  name: 'Login',
  initialState: initialState,
  reducers: {
    toggleFormLogin(state) {
      state.isOpenLoginForm = !state.isOpenLoginForm
    }
  }
})

const { actions, reducer } = LoginSlice

export { actions as LoginActions, reducer as LoginReducer }


