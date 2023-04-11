import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../store";
import { MemoryRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';

const store = setupStore()

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
