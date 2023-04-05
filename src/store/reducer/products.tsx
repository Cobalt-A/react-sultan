import { createSlice } from '@reduxjs/toolkit'


interface IfilterByPrice {
    min: number
    max: number
}

interface ISortType {
    type: string
    name: string
}

interface ProductState {
    filterByPrice: IfilterByPrice
    filterByTags: any[]
    filterByBrand: any[]
    orders: any[]
    sortType: ISortType
    brandDropDown: boolean
    mobileSidebarDropDown: boolean
}

const initialState: ProductState = {
    filterByPrice: {min: 0, max: 10000},
    filterByTags: [],
    filterByBrand: [],
    orders: [],
    sortType: {type: 'sortByName', name: 'Название по возростанию'},
    brandDropDown: false,
    mobileSidebarDropDown: false
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
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
        },
        setSortType(state, action) {
            state.sortType = action.payload
        },
        setBrandDropDown(state, action) {
            state.brandDropDown = action.payload
        },
        setMobileSidebarDropDown(state, action) {
            state.mobileSidebarDropDown = action.payload
        }
    }
})

export default productSlice.reducer