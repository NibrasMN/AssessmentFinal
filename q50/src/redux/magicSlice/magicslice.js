import { createSlice } from '@reduxjs/toolkit'

export const magicSlice = createSlice({
  name: 'magicNumber',
  initialState: {
    value: 0,
  },
  reducers: {
    
    genMagicNumber: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { genMagicNumber } = magicSlice.actions

export default magicSlice.reducer