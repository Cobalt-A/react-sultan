import { createSlice } from "@reduxjs/toolkit";
import jsonproducts from "../../db/products.json";

interface IfilterByPrice {
  min: number;
  max: number;
}

interface ISortType {
  type: string;
  name: string;
}

interface ProductState {
  products: any;
  filterByPrice: IfilterByPrice;
  filterByTags: any[];
  filterByBrand: any[];
  orders: any[];
  sortType: ISortType;
  brandDropDown: boolean;
  mobileSidebarDropDown: boolean;
}

const initialState: ProductState = {
  products: Array.from(jsonproducts),
  filterByPrice: { min: 0, max: 10000 },
  filterByTags: [],
  filterByBrand: [],
  orders: [],
  sortType: { type: "sortByName", name: "Название по возростанию" },
  brandDropDown: false,
  mobileSidebarDropDown: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    redactProducts(state, action) {
      const product = state.products.find(
        (el: any) => el.id === Number(action.payload.id)
      );
      if (product) {
        product[action.payload.key] = action.payload.value;
        localStorage.setItem("products", state.products);
      }
    },
    setFilterByPrice(state, action) {
      state.filterByPrice = action.payload;
    },
    setFilterByTags(state, action) {
      state.filterByTags = action.payload;
    },
    setFilterByBrand(state, action) {
      state.filterByBrand = action.payload;
    },
    setOrder(state, action) {
      state.orders = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setBrandDropDown(state, action) {
      state.brandDropDown = action.payload;
    },
    setMobileSidebarDropDown(state, action) {
      state.mobileSidebarDropDown = action.payload;
    },
  },
});

export default productSlice.reducer;
