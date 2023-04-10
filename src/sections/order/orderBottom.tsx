import React from 'react';

interface props {
    orderConfirf: any,
    price: any
}

function OrderBottom({orderConfirf, price}: props) {

	return (
		<section className='order-bottom'>
            <div className="container">

                <div className="order-bottom__container">
                    <button onClick={orderConfirf} className='app-btn order-confirm'>
                        Оформить заказ
                    </button>
                    <p className='order-price'>
                        {price} ₸
                    </p>
                </div>

            </div>
        </section>
	);
}

export default OrderBottom;
