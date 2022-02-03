import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../data/products'
import { categoriesSlice } from '../data/categories'

const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
