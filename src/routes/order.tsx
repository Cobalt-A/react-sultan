import React, {useState} from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { productSlice } from '../store/reducer/products';
import Breadcrumbs from '../sections/general/breadcrumbs'
import jsonproducts from '../db/products.json'
import OrderList from '../sections/order/orderList';
import OrderTop from '../sections/order/orderTop';
import OrderBottom from '../sections/order/orderBottom';

function Order() {

	const {orders} = useAppSelector(state => state.productReducer)
    const {setOrder} = productSlice.actions
    const dispatch = useAppDispatch()

	const [isOrderConfirm, setIsOrderConfirm] = useState<boolean>(false)

	const productOrders = jsonproducts.filter(el => orders.find(order => Number(order) === el.id))

	function getPrice() {
		let summ: number = 0
		orders.forEach(el => {
			const order = productOrders?.find(order => order.id === Number(el))
			if (order) {
				summ = summ + Number(order.price)
			}
		})
		return Math.round(summ * 100) / 100
	}

	function orderConfirf() {
		setIsOrderConfirm(true)
		dispatch(setOrder([]))
	}

	return (
		<main id='main'>

			<Breadcrumbs pages={[{name: 'Каталог', route: '/', isActive: false}, {name: 'Корзина', route: '/order', isActive: true}]} />

			<OrderTop isOrderConfirm={isOrderConfirm} productOrders={productOrders} />

			<OrderList />

			<OrderBottom orderConfirf={orderConfirf} price={getPrice()} />

		</main>
	);
}

export default Order;
