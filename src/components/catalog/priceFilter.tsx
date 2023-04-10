import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { productSlice } from '../../store/reducer/products';

function PriceFilter() {

    const {filterByPrice} = useAppSelector(state => state.productReducer)
    const {setFilterByPrice} = productSlice.actions
    const dispatch = useAppDispatch()

    function maxPriceInput(event:React.ChangeEvent<HTMLInputElement>) {
        dispatch(setFilterByPrice({min: filterByPrice.min, max: Number((event.target as HTMLInputElement).value)}))
    }

    function minPriceInput(event:React.ChangeEvent<HTMLInputElement>) {
        dispatch(setFilterByPrice({min: Number((event.target as HTMLInputElement).value), max: filterByPrice.max}))
    }

    return (
        <div data-testid="priceFilter" className="price-filter">
            <p className="price-filter__title">Цена <span>₸</span></p>
            <div className="price-filter__row">
                <input data-testid="maxInput" datatype='min' onChange={minPriceInput} defaultValue={filterByPrice.min} type='number' className="price-filter__input price-filter__input-from" />
                <span className='price-filter__separator'>-</span>
                <input data-testid="minInput" datatype='max' onChange={maxPriceInput} defaultValue={filterByPrice.max} type='number' className="price-filter__input price-filter__input-to" />
            </div>
        </div>
    );
}

export default PriceFilter;