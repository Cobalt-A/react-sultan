import React from 'react';
import PageTop from '../general/pageTop';

interface props {
    isOrderConfirm: any,
    productOrders: any[]
}

function OrderTop({isOrderConfirm, productOrders}: props) {

	return (
        <PageTop>

            <div className="col-lg-12">
                {(isOrderConfirm) &&
                <h1 className='page-title'>
                    Спасибо за покупку
                </h1>
                }
                {(productOrders?.length !== 0) &&
                <h1 className='page-title'>
                    Косметика и гигиена
                </h1>
                }
                {(productOrders?.length === 0 && !isOrderConfirm) &&
                <h1 className='page-title'>
                    Тут пока пусто
                </h1>
                }
            </div>

        </PageTop>
	);
}

export default OrderTop;
