import { configureStore } from '@reduxjs/toolkit'
import heroeSlice from '../features/heroe/heroeSlice'

export default configureStore({
  reducer: {
      heroe: heroeSlice
  }
})