import { createAsyncThunk, createSlice, bindActionCreators } from '@reduxjs/toolkit'
import { useRef } from 'react'
import { useAppDispatch } from 'redux/hooks'

//Interfaces / Models / Redux Initial State
export interface Category {
    category: string
    id: string
}

export interface CategoriesState {
    categories: Category[]
    loadingCategories: boolean
}

const initialState: CategoriesState = {
    categories: [],
    loadingCategories: false
}

//Redux toolkit slice. A simplified version of redux
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      reset: () => initialState,
    },
    extraReducers: builder => {
    },
})

//Actions
const fetchAllCategories = createAsyncThunk('categories/fetchAllCategories', async () => {

})

//Custom hook, this will make our life eaiser ;)
export function useCategoriesActions() {
    const dispatch = useAppDispatch()
    const actions = {
      ...categoriesSlice.actions,
      fetchAllCategories,
    }
    const refActions = useRef(bindActionCreators(actions, dispatch))
    return refActions.current
}
