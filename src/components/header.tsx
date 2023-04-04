import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import { useAppSelector } from '../hooks/redux';
import {IProduct} from '../types/types'
import axios from 'axios'

function Header() {

	const {orders} = useAppSelector(state => state.productReducer)

	const [productOrders, setProductOrders] = useState<IProduct[]>([])

	async function fetchProducts() {
		try {
			const res = await axios.get<IProduct[]>('/db/products.json')

            const productByOrders = res.data.filter(el => orders.find(order => Number(order) === el.id))

			setProductOrders(productByOrders)

		}
		catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchProducts()
	})

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

	return (
		<header id='header'>

			<div className="upper-header">

				<div className="container">

					<div className="row">

						<div className="col-xxl-6 col-lg-12 upper-header-col">
							<div className="info-block">
								<img className='info-block__icon' src={require('../assets/images/akar-icons_location.svg').default} alt="" height={'16px'} width={'auto'} />
								<p className='info-block__title'>
									г. Кокчетав, ул. Ж. Ташенова 129Б <br/>
									<span>(Рынок Восточный)</span>
								</p>
							</div>
							<div className="info-block">
								<img className='info-block__icon' src={require('../assets/images/fluent_mail-24-regular.svg').default} alt="" height={'16px'} width={'auto'} />
								<p className='info-block__title'>
									opt.sultan@mail.ru <br/>
									<span>На связи в любое время</span>
								</p>
							</div>
						</div>

						<div className="col-xxl-6 col-lg-12 upper-header-col">
							<nav className='nav'>

								<ul className='nav__ul'>
									<li className='nav__item'>
										<Link className='nav__link' to="/">О компании</Link>
									</li>
									<li className='nav__item'>
										<Link className='nav__link' to="/">Доставка и оплата</Link>
									</li>
									<li className='nav__item'>
										<Link className='nav__link' to="/">Возврат</Link>
									</li>
									<li className='nav__item'>
										<Link className='nav__link' to="/">Контакты</Link>
									</li>
								</ul>

							</nav>
						</div>

					</div>

				</div>

			</div>

			<div className="bottom-header">
				<div className="container">
					<div className="row">

						<div className="bottom-header-row">

							<Link to={'/'} className="logo-block bottom-header-row__item">
								<img src={require('../assets/images/3.1 Лого Султан RGB.svg').default} alt="" />
							</Link>

							<Link className='app-btn bottom-header-row__item' to={'/'}>Каталог<img className='app-btn__icon' src={require('../assets/images/Frame 125.svg').default} alt="" /></Link>

							<form className="input-block bottom-header-row__item">
								<input className='input-block__input' placeholder='Поиск...' type="text" />
								<button className='input-block__btn'>
									<img src={require('../assets/images/akar-icons_search.svg').default} alt="" />
								</button>
							</form>

							<div className="work-time-block bottom-header-row__item">
								<p className='work-time-block__content'>
									+7 (777) 490-00-91<br/>
									<span>время работы: 9:00-20:00</span><br/>
									<Link className='work-time-block__link' to={'/'}>Заказать звонок</Link>
								</p>
								<div className="work-time-block__img">
									<img src={require('../assets/images/Group 100.png').default} alt="" />
								</div>
							</div>

							<Link className='app-btn price-btn bottom-header-row__item' to={'/'}>Прайс лист<img className='app-btn__icon' src={require('../assets/images/Vector (4).svg').default} alt="" /></Link>

							<Link to={'/order'} className="order-block bottom-header-row__item">
								<div className="order-block__icon">
									<img src={require('../assets/images/simple-line-icons_basket.svg').default} alt="" />
									<span className='order-block__counter'>{orders.length}</span>
								</div>
								<p className="order-block__content">
									Корзина<br/>
									<span>{getPrice()} ₸</span>
								</p>
							</Link>

						</div>

					</div>
				</div>
			</div>

			<div className="mobbile-upper-header">

				<div className="container">

					<div className="row">

						<div className="mobbile-upper-header-row">

							<button className="hamburger-block">
								<div className="hamburger-block__line"></div>
							</button>

							<Link to={'/'} className="logo-block">
								<img className='logo-block__img' src={require('../assets/images/3.1 Лого Султан RGB.svg').default} alt="" />
							</Link>

							<Link to={'/order'} className="order-block">
								<img className='order-block__icon' src={require('../assets/images/simple-line-icons_basket.svg').default} alt="" />
								<span className='order-block__counter'>{orders.length}</span>
							</Link>

						</div>

					</div>

				</div>

			</div>

			<div className="mobbile-bottom-header">

				<div className="container">

					<div className="mobbile-bottom-header-row">

						<Link className='catalog-btn' to={'/'}><img className='catalog-btn__icon' src={require('../assets/images/Frame 125 (1).svg').default} alt="" />Каталог</Link>

						<button className='search-btn'><img className='search-btn__icon' src={require('../assets/images/akar-icons_search 2.svg').default} alt="" />Поиск</button>

					</div>

				</div>

			</div>

		</header>
	);
}

export default Header;