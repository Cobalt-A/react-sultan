import React from 'react';
import { Link } from "react-router-dom"
import {Ipage} from '../../types/types'

interface Ipages {
    pages: Ipage[]
}

function NavBar({pages}: Ipages) {
    return (
        <nav className='nav'>

            <ul className='nav__ul'>
                {pages.map(page =>
                    <li key={page.name} className='nav__item'>
                        <Link className='nav__link' to={page.route}>{page.name}</Link>
                    </li>
                )}
            </ul>

        </nav>
    );
}

export default NavBar;