import React from 'react';
import { Link } from "react-router-dom"

import {IProduct} from '../../types/types'
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { productSlice } from '../../store/reducer/products';



interface IProducts {
    products: IProduct[]
}



function CatalogsProduct({products}: IProducts) {

    const {orders} = useAppSelector(state => state.productReducer)
    const {setOrder} = productSlice.actions
    const dispatch = useAppDispatch()


    function addOrder(event: React.MouseEvent) {
        (document.querySelector(`.product__order-btn[datatype="${(event.target as HTMLElement).getAttribute('datatype')}"]`) as HTMLButtonElement).disabled = true
		const id = (event.target as HTMLElement).getAttribute('datatype')
        
        const array = Array.from(orders)
        array.push(id)
        dispatch(setOrder(array))
        
        
        setTimeout(() => {
            (document.querySelector(`.product__order-btn[datatype="${id}"]`) as HTMLButtonElement).disabled = false
        }, 1000);
    }


	return (

        <div className='row'>
            {products.map(product => 
                <div key={product.id} className="col-xxl-4 col-lg-6 product-col">

                    <article className='product'>
                        <Link to={'/product/' + product.id} className="product__img-block">
                            <img className='product__img' src={product.imgUrl} alt="" />
                        </Link>
                        <p className='product__volume'>
                            <img className='product__volume-icon' src={product.volumeIcon} alt="" />{product.volume}
                        </p>
                        <Link to={'/product/' + product.id} className='product__text'>
                            {product.title}
                        </Link>
                        <p className='product__barcode product__description'>Штрихкод: <span>{product.barcode}</span></p>
                        <p className='product__manufacturer product__description'>Производитель: <span>{product.manufacturer}</span></p>
                        <p className='product__brend product__description'>Бренд: <span>{product.brend}</span></p>
        
                        <div className="product__row">
                            <p className="product__price">{product.price} {product.currency}</p>
                            <button data-testid="addOrder" onClick={addOrder} datatype={String(product.id)} className='product__order-btn'>
                                В КОРЗИНУ <img onClick={addOrder} datatype={String(product.id)} className='product__order-icon' src='/assets/images/simple-line-icons_basket (1).svg' alt="" />
                            </button>
                        </div>
                    </article>
        
                </div>
            )}
        </div>
        
	);
}

export default CatalogsProduct;