import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Sidebar from '../../components/catalog/sidebar';
import CatalogsProducts from '../../components/catalog/catalogsProducts'
import data from '../../db/products.json';
import {IProduct} from '../../types/types'

function CatalogMain() {

    const {filterByPrice, filterByTags, filterByBrand, sortType} = useAppSelector(state => state.productReducer)

    const sortedArray = sortProducts(sortType.type, (data as unknown as IProduct[]))
	const filtredArray = brandFilter(tagsFilter(priceFilter(priceFilter((sortedArray)))))

    function sortProducts(sorting: string | null, data:IProduct[]) {
		if (sorting === 'sortByName') {
			return data.sort((a, b) => (a.title < b.title ? -1 : 1))
		}
		if (sorting === 'sortByNameDown') {
			return data.sort((a, b) => (a.title > b.title ? -1 : 1))
		}
		if (sorting === 'sortByPrice') {
			return data.sort((a, b) => (Number(a.price) < Number(b.price) ? -1 : 1))
		}
		if (sorting === 'sortByPriceDown') {
			return data.sort((a, b) => (Number(a.price) > Number(b.price) ? -1 : 1))
		}
		return data
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

	return (
        <section className='main-content'>

            <div className="container">

                <div className="row">

                    <div className="col-xxl-3 col-lg-4">

                        <Sidebar />

                    </div>

                    <div className="col-xxl-9 col-lg-8">

                        <div className="content">

                            <CatalogsProducts products={filtredArray} />

                        </div>

                    </div>

                </div>

            </div>

        </section>
	);
}

export default CatalogMain;
