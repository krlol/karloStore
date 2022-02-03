import { createAsyncThunk, createSlice, bindActionCreators } from '@reduxjs/toolkit'
import { useRef } from 'react'
import Config from 'react-native-config'
import { useAppDispatch } from 'redux/hooks'
import FakeApiProvider from 'services/FakeApiProvider'
import { Constants } from 'utils/constants'
import { Endpoints } from 'utils/endpoints'
import { Category, parseCategory } from './categories'

//Interfaces / Models / Redux Initial State
export interface Product {
    id: number
    title:string
    price: number
    category: Category
    description: string
    image: string
}

export interface ProductsState {
    defaultProductsList: Product[]
    loadingProducts: boolean
}

const initialState: ProductsState = {
    defaultProductsList: [],
    loadingProducts: false
}

//Redux toolkit slice. A simplified version of redux
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      reset: () => initialState,
    },
    extraReducers: builder => {
        builder.addCase(fetchDefaultProductsList.pending, state => {
            state.loadingProducts = true
          })
          builder.addCase(fetchDefaultProductsList.fulfilled, (state, action) => {
            state.loadingProducts = false
            state.defaultProductsList = action.payload?.defaultProductsList || [];
          })
          builder.addCase(fetchDefaultProductsList.rejected, state => {
            state.loadingProducts = false
          })
    },
})

//Actions
const fetchDefaultProductsList = createAsyncThunk('products/fetchDefaultProductsList', async () => {
    try{
        const defaultProductsResult = await FakeApiProvider.get(Endpoints.getProducts,{
            params:{
                limit: Config.DEFAULT_PRODUCT_LIMIT
            }
        }) as any[];
        var products:Product[] = []

        defaultProductsResult.forEach((hardProduct)=>{
            products.push({
                id: hardProduct.id,
                title: hardProduct.title,
                price: hardProduct.price,
                description: hardProduct.description,
                category: parseCategory(hardProduct.category),
                image: hardProduct.image,
            })
        })
        
        return { defaultProductsList: products, loadingProducts: false }
    }catch(e){
        console.error(`Err getting products: ${e}`)
    }
})

//Custom hook, this will make our life eaiser ;)
export function useProductsActions() {
    const dispatch = useAppDispatch()
    const actions = {
      ...productsSlice.actions,
      fetchDefaultProductsList,
    }
    const refActions = useRef(bindActionCreators(actions, dispatch))
    return refActions.current
}
