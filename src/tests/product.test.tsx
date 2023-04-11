import '@testing-library/jest-dom'
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../store";
import { MemoryRouter } from 'react-router-dom';
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