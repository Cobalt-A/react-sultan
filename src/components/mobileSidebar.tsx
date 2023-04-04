import React from 'react';
import { Link } from "react-router-dom"

function MobileSidebar() {
	return (
		<aside className='sidebar sidebar-mobile'>

            <div className="price-filter">
                <p className="price-filter__title">Цена <span>₸</span></p>
                <div className="price-filter__row">
                    <input defaultValue={'0'} type='number' className="price-filter__input price-filter__input-from" />
                    <span className='price-filter__separator'>-</span>
                    <input defaultValue={'10000'} type='number' className="price-filter__input price-filter__input-to" />
                </div>
            </div>

            <div className="manufacturer-filter">
                <p className="manufacturer-filter__title">Производитель</p>
                <div className="manufacturer-filter__input-container">
                    <input placeholder='Поиск...' type="text" className="manufacturer-filter__input" />
                    <button className='manufacturer-filter__btn'>
                        <img src={require('../assets/images/akar-icons_search.svg').default} alt="" />
                    </button>
                </div>
                <ul className='manufacturer-menu'>
                    <li className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>Grifon <span>(56)</span></p>
                        </label>
                    </li>
                    <li className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>Boyscout <span>(66)</span></p>
                        </label>
                    </li>
                    <li className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>Paclan <span>(166)</span></p>
                        </label>
                    </li>
                    <li className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>Булгари Грин <span>(21)</span></p>
                        </label>
                    </li>
                </ul>
                <Link className='manufacturer-menu-btn' to={'/'}>
                    Показать все<img className='manufacturer-menu-btn__icon' src={require('../assets/images/Polygon 5.svg').default} alt="" />
                </Link>
            </div>

            <hr />

            <div className="manufacturer-filter">
                <p className="manufacturer-filter__title">Бренд</p>
                <div className="manufacturer-filter__input-container">
                    <input placeholder='Поиск...' type="text" className="manufacturer-filter__input" />
                    <button className='manufacturer-filter__btn'>
                        <img src={require('../assets/images/akar-icons_search.svg').default} alt="" />
                    </button>
                </div>
                <ul className='manufacturer-menu'>
                    <li className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>Nivea <span>(56)</span></p>
                        </label>
                    </li>
                    <li className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>GRIFON <span>(66)</span></p>
                        </label>
                    </li>
                    <li className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>Домашний сундук <span>(166)</span></p>
                        </label>
                    </li>
                    <li className='manufacturer-menu__item'>
                        <label className='manufacturer-menu__label'>
                            <input className='manufacturer-menu__checkbox' type="checkbox" />
                            <p className='manufacturer-menu__title'>HELP <span>(21)</span></p>
                        </label>
                    </li>
                </ul>
                <Link className='manufacturer-menu-btn' to={'/'}>
                    Показать все<img className='manufacturer-menu-btn__icon' src={require('../assets/images/Polygon 5.svg').default} alt="" />
                </Link>
            </div>

            <div className="show-block">
                <button className='show-block__show-btn app-btn'>Показать</button>
                <button className='show-block__delete-btn'>
                    <img src={require('../assets/images/fluent_delete-16-filled.svg').default} alt="" />
                </button>
            </div>

        </aside>
	);
}

export default MobileSidebar;
