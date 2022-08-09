import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface VersionState {
  value: boolean
}

// Define the initial state using that type
const initialState: VersionState = {
  value: false
}

export const versionSlice = createSlice({
  name: 'version',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    change: state=>{
        state.value = !state.value
    }
  }
})

export const {  } = versionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state

export default versionSlice.reducer