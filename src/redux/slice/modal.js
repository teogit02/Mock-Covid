import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
}

const ModalSlice = createSlice({
  name: 'Modal',
  initialState: initialState,
  reducers: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen
    },
  }
})

const { actions, reducer } = ModalSlice

export { actions as ModalActions, reducer as ModalReducer }
