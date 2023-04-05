import React, {useState} from 'react';
import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { productSlice } from '../store/reducer/products';
import Breadcrumbs from '../components/breadcrumbs'
import jsonproducts from '../db/products.json'

function Order() {

	const {orders} = useAppSelector(state => state.productReducer)
    const {setOrder} = productSlice.actions
    const dispatch = useAppDispatch()

	const [isOrderConfirm, setIsOrderConfirm] = useState<boolean>(false)

	const productOrders = jsonproducts.filter(el => orders.find(order => Number(order) === el.id))

	function addOrder(event: React.MouseEvent) {
		const id = (event.target as HTMLButtonElement).getAttribute('datatype')
        const array = Array.from(orders)
        array.push(id)
        dispatch(setOrder(array))
    }

    function deleteOrder(event: React.MouseEvent) {
		const id = (event.target as HTMLButtonElement).getAttribute('datatype')
        const array = Array.from(orders)
        array.splice(array.indexOf(id), 1)
        dispatch(setOrder(array))
    }

	function deleteProduct(event: React.MouseEvent) {
		const id = (event.target as HTMLButtonElement).getAttribute('datatype')
        const array = Array.from(orders)
        const filtredArray = array.filter(el => el !== id)
        dispatch(setOrder(filtredArray))
	}

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

	function orderConfirf(event: React.MouseEvent) {

		(document.querySelector('.order-confirm') as HTMLButtonElement).innerText = 'Спасибо за заказ'

		setIsOrderConfirm(true)
		dispatch(setOrder([]))
	}

	return (
		<div className='app'>

			<main id='main'>

			<Breadcrumbs pages={[{name: 'Каталог', route: '/', isActive: false}, {name: 'Корзина', route: '/order', isActive: true}]} />

			<section className='page-top'>

				<div className="container">

					<div className="row">

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

					</div>

				</div>

			</section>

			<section className='order-list'>

				<div className="container">

					{productOrders?.map(order =>
						<article key={order.id} className='order'>

							<div className="row">

								<div className="col-lg-3">
									<div className="order-img-block">
										<img src={order.imgUrl} alt="" className="order-img-block__img" />
									</div>
								</div>

								<div className="col-lg-4">
									<div className="order__wrapper">
										<p className='order__volume'>
											<img className='order__volume-icon' src={order.volumeIcon} alt="" />{order.volume}
										</p>
										<Link to={'/product/' + order.id} className='order__title'>
											{order.brend} {order.title}
										</Link>
										<p className='order__description'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. 
										</p>
									</div>
								</div>

								<div className="col-lg-5">
									<div className="order__wrapper">
										<div className="order__row">
											<div className="order__separator"></div>

											<div className="order-amount">
												<button onClick={deleteOrder} datatype={String(order.id)} className='order-amount__btn order-amount__decrease'>-</button>
												<p className='order-amount__amount'>{orders.filter(el => Number(el) === order.id).length}</p>
												<button onClick={addOrder} datatype={String(order.id)} className='order-amount__btn order-amount__increase'>+</button>
											</div>

											<div className="order__separator"></div>

											<div className="order-price">
												<p className='order-price__price'>{order.price} ₸</p>
											</div>

											<div className="order__separator"></div>

											<div className="order-delete">
												<button onClick={deleteProduct} datatype={String(order.id)} className='order-delete__btn'>
													<img onClick={deleteProduct} datatype={String(order.id)} src={require('../assets/images/fluent_delete-16-filled.svg').default} alt="" />
												</button>
											</div>
										</div>
									</div>
								</div>

							</div>

						</article>
					)}

				</div>

			</section>

			

			<section className='order-bottom'>

				<div className="container">

				{(productOrders?.length !== 0) &&

					<div className="order-bottom__container">


						<button onClick={orderConfirf} className='app-btn order-confirm'>
							Оформить заказ
						</button>

						<p className='order-price'>
							{getPrice()} ₸
						</p>


					</div>

				}

				</div>

			</section>

			

			</main>
			
		</div>
	);
}

export default Order;
