import React from 'react';
import { Link } from "react-router-dom"

interface props {
    orders: number
}

function MobileHeader({orders}: props) {

	return (
		<>
            <div className="mobbile-upper-header">

                <div className="container">

                    <div className="row">

                        <div className="mobbile-upper-header-row">

                            <button className="hamburger-block">
                                <div className="hamburger-block__line"></div>
                            </button>

                            <Link to={'/'} className="logo-block">
                                <img className='logo-block__img' src='/assets/images/3.1 Лого Султан RGB.svg' alt="" />
                            </Link>

                            <Link to={'/order'} className="order-block">
                                <img className='order-block__icon' src='/assets/images/simple-line-icons_basket.svg' alt="" />
                                <span className='order-block__counter'>{orders}</span>
                            </Link>

                        </div>

                    </div>

                </div>

                </div>

                <div className="mobbile-bottom-header">

                <div className="container">

                    <div className="mobbile-bottom-header-row">

                        <Link className='catalog-btn' to={'/'}><img className='catalog-btn__icon' src='/assets/images/Frame 125 (1).svg' alt="" />Каталог</Link>

                        <button className='search-btn'><img className='search-btn__icon' src='/assets/images/akar-icons_search 2.svg' alt="" />Поиск</button>

                    </div>

                </div>

            </div>
        </>
	);
}

export default MobileHeader;