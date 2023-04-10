import '@testing-library/jest-dom'
import { screen, render, fireEvent } from "@testing-library/react";
import PriceFilter from "../components/catalog/priceFilter";
import { Provider } from "react-redux";
import { setupStore } from "../store";
import { MemoryRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import ManufacturerFilter from '../components/catalog/manufacturerFilter';
import TagsMenu from '../components/catalog/tagsMenu';
import SortBlock from '../components/catalog/sortBlock';
import ProductInfo from '../components/product/productInfo';

const store = setupStore()

const product = {
    id: 1,
    imgUrl: '',
    volume: '450',
    volumeIcon: '',
    title: 'title',
    description: 'description',
    barcode: 'barcode',
    manufacturer: 'manufacturer',
    brend: 'brend',
    price: 'price',
    currency: 'currency',
    tags: [],
    brand: [],
    inStock: true
}

describe('Layout tests', () => {
    it('Header in document', () => {
        render(<Provider store={store}><MemoryRouter initialEntries={['/']}><MainLayout /></MemoryRouter></Provider>)
        const element = screen.getByTestId('header')
        expect(element).toBeInTheDocument()
    })
    it('Footer in document', () => {
        render(<Provider store={store}><MemoryRouter initialEntries={['/']}><MainLayout /></MemoryRouter></Provider>)
        const element = screen.getByTestId('footer')
        expect(element).toBeInTheDocument()
    })
})

describe('Catalog tests', () => {
    it('Price filter inputs in document', () => {
        render(<Provider store={store}><MemoryRouter><PriceFilter /></MemoryRouter></Provider>)
        const maxInput = screen.getByTestId('maxInput')
        const minInput = screen.getByTestId('minInput')
        expect(maxInput).toBeInTheDocument()
        expect(minInput).toBeInTheDocument()
    })
    it('Manufacturer filter checkbox events', () => {
        render(<Provider store={store}><MemoryRouter><ManufacturerFilter /></MemoryRouter></Provider>)
        const checkboxs = screen.getAllByTestId('checkbox') 
        for (const checkbox of checkboxs) {
            fireEvent.click(checkbox)
            expect((checkbox as HTMLInputElement).checked).toEqual(true)
        }
    })
    it('Tags menu events toggle class', () => {
        render(<Provider store={store}><MemoryRouter><TagsMenu /></MemoryRouter></Provider>)
        const tags = screen.getAllByTestId('tag') 
        for (const tag of tags) {
            fireEvent.click(tag)
            expect(tag).toHaveClass('tags-menu__tag-active')
        }
    })
    it('Sort toggle menu', () => {
        render(<Provider store={store}><MemoryRouter><SortBlock /></MemoryRouter></Provider>)
        const toogleSortMenu = screen.getByTestId('toogleSortMenu')
        fireEvent.click(toogleSortMenu)
        const sortBtns = screen.getAllByTestId('sortBtn')
        for (const btn of sortBtns) {
            expect(btn).toBeInTheDocument()
        }
    })
})

describe('product tests', () => {
    it('Product order buttons and price', () => {
        render(<Provider store={store}><MemoryRouter><ProductInfo product={product} productTags={product.tags} id='1' /></MemoryRouter></Provider>)
        const deleteOrder = screen.getByTestId('deleteOrder')
        const addOrder = screen.getByTestId('addOrder')
        const order = screen.getByTestId('order')
        fireEvent.click(addOrder)
        fireEvent.click(order)
        fireEvent.click(deleteOrder)
        expect(screen.getByTestId('amount').textContent).toEqual('1')

        const price = screen.getByTestId('price')
        expect(price.textContent).toEqual(`${product.price} ${product.currency}`)
    })
})