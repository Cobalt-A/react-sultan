import React from 'react';
import { Link } from "react-router-dom"
import NavBar from '../../components/general/navbar'

interface props {
    orders: any,
    price: any
}

function DesctopHeader({orders, price}: props) {

	return (
		<>

			<div className="upper-header">

				<div className="container">

					<div className="row">

						<div className="col-xxl-6 col-lg-12 upper-header-col">
							<div className="info-block">
								<img className='info-block__icon' src='/assets/images/akar-icons_location.svg' alt="" height={'16px'} width={'auto'} />
								<p className='info-block__title'>
									г. Кокчетав, ул. Ж. Ташенова 129Б <br/>
									<span>(Рынок Восточный)</span>
								</p>
							</div>
							<div className="info-block">
								<img className='info-block__icon' src='/assets/images/fluent_mail-24-regular.svg' alt="" height={'16px'} width={'auto'} />
								<p className='info-block__title'>
									opt.sultan@mail.ru <br/>
									<span>На связи в любое время</span>
								</p>
							</div>
						</div>

						<div className="col-xxl-6 col-lg-12 upper-header-col">
							<nav className='nav'>

								<NavBar pages={[
										{ route: '/', name: 'О компании', isActive: false },
										{ route: '/', name: 'Доставка и оплата', isActive: false},
										{route: '/', name: 'Возврат', isActive: false },
										{route: '/',name: 'Контакты',isActive: false}
									]}
								/>

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
								<img src='/assets/images/3.1 Лого Султан RGB.svg' alt="" />
							</Link>

							<Link className='app-btn bottom-header-row__item' to={'/'}>Каталог<img className='app-btn__icon' src='/assets/images/Frame 125.svg' alt="" /></Link>

							<form className="input-block bottom-header-row__item">
								<input className='input-block__input' placeholder='Поиск...' type="text" />
								<button className='input-block__btn'>
									<img src='/assets/images/akar-icons_search.svg' alt="" />
								</button>
							</form>

							<div className="work-time-block bottom-header-row__item">
								<p className='work-time-block__content'>
									+7 (777) 490-00-91<br/>
									<span>время работы: 9:00-20:00</span><br/>
									<Link className='work-time-block__link' to={'/'}>Заказать звонок</Link>
								</p>
								<div className="work-time-block__img">
									<img src='/assets/images/Group 100.png' alt="" />
								</div>
							</div>

							<Link className='app-btn price-btn bottom-header-row__item' to={'/'}>Прайс лист<img className='app-btn__icon' src='/assets/images/Vector (4).svg' alt="" /></Link>

							<Link to={'/order'} className="order-block bottom-header-row__item">
								<div className="order-block__icon">
									<img src='/assets/images/simple-line-icons_basket.svg' alt="" />
									<span className='order-block__counter'>{orders}</span>
								</div>
								<p className="order-block__content">
									Корзина<br/>
									<span>{price} ₸</span>
								</p>
							</Link>

						</div>

					</div>
				</div>
			</div>
		</>
	);
}

export default DesctopHeader;