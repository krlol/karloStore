import { createAsyncThunk, createSlice, bindActionCreators } from '@reduxjs/toolkit'
import { useRef } from 'react'
import { useAppDispatch } from 'redux/hooks'
import FakeApiProvider from 'services/FakeApiProvider'
import { Constants } from 'utils/constants'
import { Endpoints } from 'utils/endpoints'

//Interfaces / Models / Redux Initial State
export interface Category {
    category: string
    id: string
}

export interface CategoriesState {
    categoriesList: Category[]
    loadingCategories: boolean
}

const initialState: CategoriesState = {
  categoriesList: [],
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
        builder.addCase(fetchAllCategories.pending, state => {
            state.loadingCategories = true
          })
          builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.loadingCategories = false
            state.categoriesList = action.payload?.categoriesList || [];
          })
          builder.addCase(fetchAllCategories.rejected, state => {
            state.loadingCategories = false
          })
    },
})

//Actions
const fetchAllCategories = createAsyncThunk('categories/fetchAllCategories', async () => {
    try{
        const categoriesResult = await FakeApiProvider.get(Endpoints.getProductsCategories) as string[];
        var categories:Category[] = []
        categoriesResult.forEach((hardCategory)=>{
          var categoryId = hardCategory;
          while(categoryId.includes(' ')){
            categoryId = categoryId.replace(' ', Constants.SpaceSymbol);
          }
          categories.push({
            id: categoryId,
            category: hardCategory
          })
        })
        return { loadingCategories: false, categoriesList: categories }
    }catch(e){
        console.error(`Err getting categories: ${e}`)
    }
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
