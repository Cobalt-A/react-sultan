import {IProduct} from '../../types/types'
import { createSlice } from '@reduxjs/toolkit'

interface IfilterByPrice {
    min: number
    max: number
}

interface ProductState {
    products: IProduct[]
    isLoading: false
    error: string
    count: number,
    filterByPrice: IfilterByPrice
    filterByTags: any[]
    filterByBrand: any[]
    orders: any[],
    ordersPrice: number
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    count: 0,
    filterByPrice: {min: 0, max: 10000},
    filterByTags: [],
    filterByBrand: [],
    orders: [],
    ordersPrice: 0
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment(state, action) {
            state.count += action.payload
        },
        setFilterByPrice(state, action) {
            state.filterByPrice = action.payload
        },
        setFilterByTags(state, action) {
            state.filterByTags = action.payload
        },
        setFilterByBrand(state, action) {
            state.filterByBrand = action.payload
        },
        setOrder(state, action) {
            state.orders = action.payload
        }
    }
})

export default productSlice.reducer