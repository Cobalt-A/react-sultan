import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import TagsMenu from './tagsMenu';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { productSlice } from '../store/reducer/products';
import {IBrands} from '../types/types'
import axios from 'axios'

function Sidebar() {

    const {filterByPrice, filterByBrand} = useAppSelector(state => state.productReducer)
    const {setFilterByPrice, setFilterByBrand} = productSlice.actions
    const dispatch = useAppDispatch()

    const [brands, setBrands] = useState<IBrands[]>([])
    const [brandDropDownIcon, setBrandDropDownIcon] = useState<string>('/assets/images/Polygon 5.svg')
    const [findBrand, setFindBrand] = useState<string>('')
    const brandMenu = useRef<HTMLUListElement>(null)

    async function fetchBrands() {
		try {
			const res = await axios.get<IBrands[]>('/db/brands.json')
            const filtredBrands = findBrandFilter(res.data)
            setBrands(filtredBrands)
		}
		catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchBrands()
	})


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

    function showAllBrands(event: React.MouseEvent) {
        if ((brandMenu.current as HTMLUListElement).classList.contains('manufacturer-menu-active')) {
            (brandMenu.current as HTMLUListElement).classList.remove('manufacturer-menu-active')
            setBrandDropDownIcon('/assets/images/Polygon 5.svg')
            return
        }
        (brandMenu.current as HTMLUListElement).classList.add('manufacturer-menu-active')
        setBrandDropDownIcon('/assets/images/Polygon 4.svg')
    }

    document.querySelectorAll('.manufacturer-menu__checkbox').forEach(button => {
        if (filterByBrand.find((el) => Number((button as HTMLButtonElement).getAttribute('datatype')) === el)) {
            (button as HTMLInputElement).checked = true;
            return
        }
        (button as HTMLInputElement).checked = false;
    })

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
                <ul ref={brandMenu} className='manufacturer-menu'>
                    {brands.map(brand =>
                    <li key={brand.id} className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input datatype={String(brand.id)} onChange={togleBrandFilter} className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>{brand.name} <span>({brand.products})</span></p>
                        </label>
                    </li>
                    )}
                </ul>
                {(brands.length > 5) &&
                <button onClick={showAllBrands} className='manufacturer-menu-btn'>
                    Показать все<img className='manufacturer-menu-btn__icon' src={brandDropDownIcon} alt="" />
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
