import React from 'react';

interface props {
    description: string
}

function ProductDescription({description}: props) {

	return (
		<div className="product-description">
            <button className='product-info-btn'>
                Описание<img className='product-info-btn__icon' src='/assets/images/Polygon 4.svg' alt="" />
            </button>
            <p className='product-description-text'>
                {description}
            </p>
        </div>
	);
}

export default ProductDescription;