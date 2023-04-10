import React from 'react';
import { IProduct } from '../../types/types';

interface props {
    product: IProduct
}

function ProductCharacteristics({product}: props) {
	return (
		<div className="product-info__block">

            <button className='product-info-btn'>
                Характеристики<img className='product-info-btn__icon' src='/assets/images/Polygon 4.svg' alt="" />
            </button>

            <ul className='product-info-menu'>
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Бренд: <span>{product.barcode}</span></p>
                </li>
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Артикул: <span>{product.barcode}</span></p>
                </li>
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Штрихкод: <span>{product.barcode}</span></p>
                </li>
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Объем: <span>{product.volume}</span></p>
                </li>
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Кол-во в коробке: <span>{product.volume}</span></p>
                </li>
            </ul>

        </div>
	);
}

export default ProductCharacteristics;