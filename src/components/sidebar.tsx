import React, { ChangeEvent, useState } from 'react';
import TagsMenu from './tagsMenu';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { productSlice } from '../store/reducer/products';
import {IBrands} from '../types/types'
import jsonbrands from '../db/brands.json'

function Sidebar() {

    const {filterByPrice, filterByBrand, brandDropDown} = useAppSelector(state => state.productReducer)
    const {setFilterByPrice, setFilterByBrand, setBrandDropDown} = productSlice.actions
    const dispatch = useAppDispatch()

    const [findBrand, setFindBrand] = useState<string>('')

    const findedBrands = findBrandFilter(jsonbrands)

    function maxPriceInput(event:ChangeEvent<HTMLInputElement>) {
        
        dispatch(setFilterByPrice({min: filterByPrice.min, max: Number((event.target as HTMLInputElement).value)}))
        
    }

    function minPriceInput(event:ChangeEvent<HTMLInputElement>) {

        dispatch(setFilterByPrice({min: Number((event.target as HTMLInputElement).value), max: filterByPrice.max}))

    }

    function togleBrandFilter(event:ChangeEvent<HTMLInputElement>) {

        if (filterByBrand.find(el => el === Number((event.target as HTMLInputElement).getAttribute('datatype')))) {
            (event.target as HTMLInputElement).checked = false;
            const array = filterByBrand.filter(el => el !== Number((event.target as HTMLInputElement).getAttribute('datatype')))
            dispatch(setFilterByBrand(array))
            return
        }

        (event.target as HTMLInputElement).checked = true;
        const array = Array.from(filterByBrand)
        array.push(Number((event.target as HTMLInputElement).getAttribute('datatype')))
        dispatch(setFilterByBrand(array))
        
    }

    function findBrandFilter(data: IBrands[]) {
        if (!findBrand) return data
        const array = Array.from(data)
        const result = array.filter(el => {
            return el.name.trim().toLowerCase().indexOf(findBrand) === 0
        })
        return result
    }

    function findManufacturer(event:ChangeEvent<HTMLInputElement>) {
        setFindBrand((event.target as HTMLInputElement).value.trim().toLowerCase())
    }

    function showAllBrands() {
        if (brandDropDown) {
            dispatch(setBrandDropDown(false))
            return
        }
        dispatch(setBrandDropDown(true))
    }

	return (
		<aside className='sidebar'>

            <h2 className="sidebar__title">ПОДБОР ПО ПАРАМЕТРАМ</h2>

            <div className="price-filter">
                <p className="price-filter__title">Цена <span>₸</span></p>
                <div className="price-filter__row">
                    <input datatype='min' onChange={minPriceInput} defaultValue={filterByPrice.min} type='number' className="price-filter__input price-filter__input-from" />
                    <span className='price-filter__separator'>-</span>
                    <input datatype='max' onChange={maxPriceInput} defaultValue={filterByPrice.max} type='number' className="price-filter__input price-filter__input-to" />
                </div>
            </div>

            <div className="manufacturer-filter">
                <p className="manufacturer-filter__title">Производитель</p>
                <div className="manufacturer-filter__input-container">
                    <input onChange={findManufacturer} placeholder='Поиск...' type="text" className="manufacturer-filter__input" />
                    <button className='manufacturer-filter__btn'>
                        <img src={require('../assets/images/akar-icons_search.svg').default} alt="" />
                    </button>
                </div>
                <ul className={brandDropDown ? 'manufacturer-menu manufacturer-menu-active' : 'manufacturer-menu'}>
                    {findedBrands.map(brand =>
                    <li key={brand.id} className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input 
                                datatype={String(brand.id)}
                                onChange={togleBrandFilter}
                                className='manufacturer-menu__checkbox'
                                type="checkbox"
                                checked={(filterByBrand.find((el) => brand.id === el)) ? true : false}
                            />
                            <p className='manufacturer-menu__title'>{brand.name} <span>({brand.products})</span></p>
                        </label>
                    </li>
                    )}
                </ul>
                {(findedBrands.length > 5) &&
                <button onClick={showAllBrands} className='manufacturer-menu-btn'>
                    Показать все<img className='manufacturer-menu-btn__icon' src={brandDropDown ? '/assets/images/Polygon 4.svg' : '/assets/images/Polygon 5.svg'} alt="" />
                </button>
                }
            </div>

            <hr />

            {/* <div className="show-block">
                <button className='show-block__show-btn app-btn'>Показать</button>
                <button className='show-block__delete-btn'>
                    <img src={require('../assets/images/fluent_delete-16-filled.svg').default} alt="" />
                </button>
            </div> */}

            <div className="tags-filter">
                <p className="tags-filter__title">Косметика и гигиена</p>

                <TagsMenu />
            </div>

        </aside>
	);
}

export default Sidebar;
