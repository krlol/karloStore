import { configureStore } from '@reduxjs/toolkit'
import { categoriesSlice } from 'src/data/Categories'

const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
