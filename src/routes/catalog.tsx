import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../components/sidebar';
import CatalogsProducts from '../components/catalogsProducts'
import TagsMenu from '../components/tagsMenu';
import {IProduct} from '../types/types'
import axios from 'axios'
import { useAppSelector } from '../hooks/redux';
import Breadcrumbs from '../components/breadcrumbs'

function Catalog() {

	const {filterByPrice, filterByTags, filterByBrand} = useAppSelector(state => state.productReducer)

	const [products, setProducts] = useState<IProduct[]>([])
	const [isShow, setShow] = useState<boolean>(false)
	const [sorting, setSorting] = useState<string | null>('sortByName')
	const [sortName, setsortName] = useState<string>('Название по возростанию')
	const [dropDownIcon, setDropDownIcon] = useState<string>('/assets/images/Vector 24 2.svg')
	const ref = useRef<HTMLUListElement>(null)
	const mobileRef = useRef<HTMLUListElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)
	const mobileButtonRef = useRef<HTMLButtonElement>(null)
	const sidebarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		fetchProducts()

		const clickHandler = (event:MouseEvent) => {

			if (mobileButtonRef.current?.contains(event.target as Node) || buttonRef.current?.contains(event.target as Node)) {
				return
			}

			if (!ref.current?.contains(event.target as Node) && !mobileRef.current?.contains(event.target as Node)) {
				setShow(false);
				return
			}
		}

		document.addEventListener('mousedown', clickHandler)
	})

	
	
	async function fetchProducts() {
		try {
			const res = await axios.get<IProduct[]>('db/products.json')
			const sortedArray = sortProducts(sorting, res.data)
			const filteredByPrice = priceFilter(sortedArray)
			const filterByTags = tagsFilter(filteredByPrice)
			const filtredByBrand = brandFilter(filterByTags)

			setProducts(filtredByBrand)
		}
		catch (error) {
			console.error(error)
		}
	}

	function toggleMenu() {
		setShow(!isShow);
	}

	function sortProducts(sorting: string | null, data:IProduct[]) {
		if (sorting === 'sortByName') {
			return data.sort((a, b) => (a.title < b.title ? -1 : 1))
		}
		if (sorting === 'sortByNameDown') {
			return data.sort((a, b) => (a.title > b.title ? -1 : 1))
		}
		if (sorting === 'sortByPrice') {
			return data.sort((a, b) => (a.price < b.price ? -1 : 1))
		}
		if (sorting === 'sortByPriceDown') {
			return data.sort((a, b) => (a.price > b.price ? -1 : 1))
		}
		return data.sort((a, b) => (a.title > b.title ? -1 : 1))
	}

	function setSort(event:React.MouseEvent) {
		const data = (event.target as HTMLButtonElement).getAttribute('datatype')
		setSorting(data)
		setsortName((event.target as HTMLButtonElement).innerHTML)
		toggleMenu()
	}

	function priceFilter(data: IProduct[]) {
		const filtredArray = data.filter((el) => {
			if (Number(el.price) > filterByPrice.max || Number(el.price) < filterByPrice.min) return false
			return true
		})
		return filtredArray
	}

	function tagsFilter(data: IProduct[]) {
		if (!filterByTags.length) return data
		const result = data.filter(el => {
			return el.tags.find(tag => filterByTags.find(filterTag => tag === filterTag.id))
		})

		return result
	}

	function brandFilter(data: IProduct[]) {
		if (!filterByBrand.length) return data
		const result = data.filter(el => {
			return filterByBrand.find(filterBrand => filterBrand === el.brand)
		})

		return result
	}

	function toogleSidebar() {
		if ((sidebarRef.current as HTMLDivElement).classList.contains('mobile-sidebar-wrapper-active')) {
			(sidebarRef.current as HTMLDivElement).classList.remove('mobile-sidebar-wrapper-active')
			setDropDownIcon('/assets/images/Vector 24 2.svg')
			return
		}
		(sidebarRef.current as HTMLDivElement).classList.add('mobile-sidebar-wrapper-active')
		setDropDownIcon('/assets/images/Vector 24 (1).svg')
	}

	return (
        <main id='main'>

			<Breadcrumbs pages={[{name: 'Каталог', route: '/', isActive: true}]} />

			<section className='page-top'>

				<div className="container">

					<div className="row">

						<div className="col-lg-6">
							<h1 className='page-title'>Косметика и гигиена</h1>
						</div>

						<div className="col-lg-6">
							<div className="catalog-block">
								<div className="sort">
									<div className="sort-block">
										<p className='sort-block__title'>Сортировка:</p>
										<button onClick={toggleMenu} ref={buttonRef} className='sort-block__btn'>{sortName}
											<img
												className='sort-block__icon'
												src={isShow ? '/assets/images/Polygon 4.svg' : '/assets/images/Polygon 5.svg'}
												alt=""
											/>
										</button>
									</div>
									{isShow &&
										<ul ref={ref} className='sort-menu 1'>
											<li className='sort-menu__item'>
												<button onClick={setSort} datatype='sortByName' className='sort-menu__btn'>Название по возростанию</button>
											</li>
											<li className='sort-menu__item'>
												<button onClick={setSort} datatype='sortByNameDown' className='sort-menu__btn'>Название по убыванию</button>
											</li>
											<li className='sort-menu__item'>
												<button onClick={setSort} datatype='sortByPrice' className='sort-menu__btn'>Цена по возростанию</button>
											</li>
											<li className='sort-menu__item'>
												<button onClick={setSort} datatype='sortByPriceDown' className='sort-menu__btn'>Цена по убыванию</button>
											</li>
										</ul>
									}
									
								</div>
								
								<div className="display-block">
									<button className='display-block__hamburger'>
										<div className="display-block__line"></div>
									</button>
									<div className="display-block__icon"><img src={require('../assets/images/Frame 120.svg').default} alt="" /></div>
								</div>
							</div>
							
						</div>

					</div>

				</div>

			</section>

			<section className='tags'>

				<div className="container">

					<TagsMenu />

				</div>

			</section>

			<section className='mobile-tags'>
				<div className="container">
					<div className="mobile-tags-title">
						<h3 className='mobile-tags-title__title'>ПОДБОР ПО ПАРАМЕТРАМ</h3>
						<button onClick={toogleSidebar} className='mobile-tags-title__btn'>
							<img src={dropDownIcon} alt="" />
						</button>
					</div>

					<div ref={sidebarRef} className="mobile-sidebar-wrapper">
						<Sidebar />
					</div>

				</div>
			</section>

			<section className='mobile-sort'>

				<div className="container">

					<div className="sort-block">
						<p className='sort-block__title'>Сортировка:</p>
						<button ref={mobileButtonRef} onClick={toggleMenu} className='sort-block__btn'>
							{sortName}
							<img
								className='sort-block__icon'
								src={isShow ? '/assets/images/Polygon 4.svg' : '/assets/images/Polygon 5.svg'}
								alt=""
							/>
						</button>
						{isShow &&
						<ul ref={mobileRef} className='sort-menu 2'>
							<li className='sort-menu__item'>
								<button onClick={setSort} datatype='sortByName' className='sort-menu__btn'>Название по возростанию</button>
							</li>
							<li className='sort-menu__item'>
								<button onClick={setSort} datatype='sortByNameDown' className='sort-menu__btn'>Название по убыванию</button>
							</li>
							<li className='sort-menu__item'>
								<button onClick={setSort} datatype='sortByPrice' className='sort-menu__btn'>Цена по возростанию</button>
							</li>
							<li className='sort-menu__item'>
								<button onClick={setSort} datatype='sortByPriceDown' className='sort-menu__btn'>Цена по убыванию</button>
							</li>
						</ul>
						}
					</div>

				</div>

			</section>

			<section className='main-content'>

				<div className="container">

					<div className="row">

						<div className="col-xxl-3 col-lg-4">

							<Sidebar />

						</div>

						<div className="col-xxl-9 col-lg-8">

							<div className="content">

								<CatalogsProducts products={products} />

							</div>

						</div>

					</div>

				</div>

			</section>

		</main>
	);
}

export default Catalog;
