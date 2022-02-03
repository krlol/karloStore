import { createAsyncThunk, createSlice, bindActionCreators } from '@reduxjs/toolkit'
import { useRef } from 'react'
import Config from 'react-native-config'
import { useAppDispatch } from 'redux/hooks'
import FakeApiProvider from 'services/FakeApiProvider'
import { Constants } from 'utils/constants'
import { Endpoints } from 'utils/endpoints'
import { Category, parseCategory } from './categories'

//Interfaces / Models / Redux Initial State / helpers
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

const parseProducts = (hardResult:any[]):Product[] => {
    var products:Product[] = []
    hardResult.forEach((hardProduct)=>{
        products.push({
            id: hardProduct.id,
            title: hardProduct.title,
            price: hardProduct.price,
            description: hardProduct.description,
            category: parseCategory(hardProduct.category),
            image: hardProduct.image,
        })
    })
    return products;
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
        return { defaultProductsList: parseProducts(defaultProductsResult), loadingProducts: false }
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

export const searchProduct = (searchString:string, products:Product[]):Product[] => {
    //I didnt see a search functionality on FAKE API
    return products.filter((productToFilter)=> productToFilter.title.toLowerCase().includes(searchString.toLowerCase()) || productToFilter.description.toLowerCase().includes(searchString.toLowerCase()) || productToFilter.category.category.toLowerCase().includes(searchString.toLowerCase()))
}

export const requestProductsByCategoryId = (categoryId:string):Promise<Product[]> => {
    return new Promise((resolve,reject)=>{
        return FakeApiProvider.get(Endpoints.productFromCategory(categoryId)).then((categoryProducts)=>{
            return resolve(parseProducts(categoryProducts))
        }).catch((e)=>{
            return reject(e)
        })
    })
}

export const getSingleProduct = (productId:number):Promise<Product> => {
    return new Promise((resolve,reject)=>{
        return FakeApiProvider.get(Endpoints.getProduct(productId)).then((productResult)=>{
            return resolve(parseProducts([productResult])[0])
        }).catch((e)=>{
            return reject(e)
        })
    })
}
