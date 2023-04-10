import React from 'react';
import { IProduct, ITags } from '../../types/types';

interface props {
    product: IProduct
    productTags: ITags[]
}

function ProductInfoBlock({product, productTags}: props) {
	return (
		<div className="product-info__block">

            <ul className='product-info-menu'>
                {(productTags?.length !== 0) &&
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Тип: {productTags?.map(tag =>
                        <span key={tag.id}>{tag.name.replace('<br/>', ' ') + ', '}</span> 
                    )}</p>
                </li>
                }
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Штрихкод: <span>{product.barcode}</span></p>
                </li>
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Производитель: <span>{product.manufacturer}</span></p>
                </li>
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Бренд: <span>{product.brend}</span></p>
                </li>
                <li className='product-info-menu__item'>
                    <p className='product-info-menu__title'>Артикул: <span>{product.barcode}</span></p>
                </li>
            </ul>

        </div>
	);
}

export default ProductInfoBlock;