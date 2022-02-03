import { Category } from "src/data/categories"

export const Endpoints = {
    getProductsCategories: '/products/categories',
    getProducts:'/products',
    productFromCategory:(categoryId:string)=>{
        return `/products/category/${categoryId}`
    },
    getProduct:(productId:number)=>{
        return `/products/${productId}`

    },
}