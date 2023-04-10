import '@testing-library/jest-dom'
import { screen, render, fireEvent, cleanup, queryByTestId } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../store";
import { MemoryRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';


const store = setupStore()

describe('integration tests', () => {
    it('order function', () => {
        render(<Provider store={store}><MemoryRouter initialEntries={['/product/1']}><MainLayout /></MemoryRouter></Provider>)
        const order = screen.getByTestId('order')
        fireEvent.click(order)
        fireEvent.click(order)
        cleanup()
        render(<Provider store={store}><MemoryRouter initialEntries={['/order']}><MainLayout /></MemoryRouter></Provider>)
        expect(screen.getByTestId('amount').textContent).toEqual('2')
        const deleteAllOrder = screen.getByTestId('deleteAllOrder')
        fireEvent.click(deleteAllOrder)
        expect(screen.queryByTestId('amount')).toBeNull()
    })
    it('catalog list tags filter', () => {
        render(<Provider store={store}><MemoryRouter initialEntries={['/']}><MainLayout /></MemoryRouter></Provider>)
        const tags = screen.getAllByTestId('tag')
        const addOrderBtns = screen.getAllByTestId('addOrder')
        fireEvent.click(tags[0])
        expect(addOrderBtns.length).not.toEqual(screen.getAllByTestId('addOrder').length)
    })
    it('Not found page', () => {
        render(<Provider store={store}><MemoryRouter initialEntries={['/notfound']}><MainLayout /></MemoryRouter></Provider>)
        const notFound = screen.getByTestId('notFound')
        expect(notFound).toBeInTheDocument()
    })
})
