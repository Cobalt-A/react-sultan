import React from 'react';
import { Link } from "react-router-dom"

function DesctopFooter() {
	return (
		<div className="footer-desctop">

			<div className="container">

				<div className="row">

					<div className="col-xxl-3 col-lg-12">

						<div className="footer-column promo-column">
							<div className="logo-block">
								<img src='/assets/images/3.1 Лого Султан RGB (1).svg' alt="" />
							</div>
							<p className="footer-column__text">
								Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
							</p>
							<form className='email-form' action="">
								<label className='email-form__label' htmlFor="email">Подпишись на скидки и акции</label>
								<input id='email' className='email-form__input' placeholder='Введите ваш E-mail' type="email" />
								<button className='email-form__button'>
									<img className='email-form__icon' src='/assets/images/Vector (5).svg' alt="" />
								</button>
							</form>
						</div>

					</div>

					<div className="col-xxl-2 col-lg-6">

						<div className="footer-column">

							<p className="footer-column__title">Меню сайта:</p>

							<ul className="footer-menu">
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>О компании</Link></li>
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>Доставка и оплата</Link></li>
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>Возврат</Link></li>
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>Контакты</Link></li>
							</ul>

						</div>

					</div>

					<div className="col-xxl-2 col-lg-6">

						<div className="footer-column">

							<p className="footer-column__title">Категории:</p>

							<ul className="footer-menu">
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>Бытовая химия</Link></li>
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>Косметика и гигиена</Link></li>
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>Товары для дома</Link></li>
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>Товары для детей и мам</Link></li>
								<li className="footer-menu__item"><Link className='footer-menu__link' to={'/'}>Посуда</Link></li>
							</ul>

						</div>

					</div>

					<div className="col-xxl-3 col-lg-6">

						<div className="footer-column">

							<p className="footer-column__title">Скачать прайс-лист:</p>

							<Link to={'/'} className='app-btn footer-column__btn'>Прайс лист<img className='app-btn__icon' src='/assets/images/Vector (4).svg' alt="" /></Link>

							<div className="socials">
								<p className='socials__title'>Связь в мессенджерах:</p>
								<ul className='socials-menu'>
									<li className='socials-menu__item'><Link className='socials-menu__link' to={'/'}><img src='/assets/images/logos_telegram.svg' alt="" /></Link></li>
									<li className='socials-menu__item'><Link className='socials-menu__link' to={'/'}><img src='/assets/images/Group 162.svg' alt="" /></Link></li>
								</ul>
							</div>

						</div>

					</div>

					<div className="col-xxl-2 col-lg-6">

						<div className="footer-column">

							<p className="footer-column__title">Контакты:</p>

							<div className='footer-contacts'>
								<p className="footer-contacts__text">
									+7 (777) 490-00-91<br/>
									<span>время работы: 9:00-20:00</span><br/>
									<Link className='footer-contacts__link' to={'/'}>Заказать звонок</Link>
								</p>
								<p className="footer-contacts__text">
									opt.sultan@mail.ru<br/>
									<span>На связи в любое время</span>
								</p>
							</div>

							<ul className="cards-list">
								<li className="cards-list__item"><img src='/assets/images/Visa.svg' alt="" /></li>
								<li className="cards-list__item"><img src='/assets/images/Visa (1).svg' alt="" /></li>
							</ul>

						</div>

					</div>

				</div>

			</div>

		</div>
	);
}

export default DesctopFooter;