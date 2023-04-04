import React from 'react';
import { Link } from "react-router-dom"

interface Ipage {
    name: string;
    route: string;
    isActive: boolean
}

interface Ipages {
    pages: Ipage[]
}

function Breadcrumbs({pages}: Ipages) {
    return (
        <section className="breadcrumbs">
            <div className="container">

                <div className="breadcrumbs-block">

                    <Link className='breadcrumbs-block__link' to={'/'}>Главная</Link>

                    {pages.map(page =>
                        <span className='breadcrumbs-block__element' key={page.route}>
                            <span key={page.route} className='breadcrumbs-block__separator'></span>
                            <Link className={page.isActive ? 'breadcrumbs-block__link-active' : 'breadcrumbs-block__link'} to={page.route}>{page.name}</Link>
                        </span>
                    )}

                </div>

                <div className="breadcrumbs-mobile-block">

                    <Link className='breadcrumbs-mobile-block__link' to={'/'}>
                        <div className="breadcrumbs-mobile-block__icon-container">
                            <img className='breadcrumbs-mobile-block__icon' src={require('../assets/images/Vector 24.svg').default} alt="" />
                        </div>
                        <p className='breadcrumbs-mobile-block__text'>Назад</p>
                    </Link>

                </div>

            </div>
        </section>
    );
}

export default Breadcrumbs;