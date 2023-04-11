import '@testing-library/jest-dom'
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../store";
import { MemoryRouter } from 'react-router-dom';
import ManufacturerFilter from '../components/catalog/manufacturerFilter';
import TagsMenu from '../components/catalog/tagsMenu';
import SortBlock from '../components/catalog/sortBlock';
import PriceFilter from "../components/catalog/priceFilter";

const store = setupStore()

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