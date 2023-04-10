import React from 'react';
import TagsMenu from './tagsMenu';
import PriceFilter from './priceFilter'
import ManufacturerFilter from './manufacturerFilter';

function Sidebar() {
	return (
		<aside data-testid="sidebar" className='sidebar'>

            <h2 className="sidebar__title">ПОДБОР ПО ПАРАМЕТРАМ</h2>

            <PriceFilter />

            <ManufacturerFilter />

            <hr />

            <div className="tags-filter">
                <p className="tags-filter__title">Косметика и гигиена</p>
                <TagsMenu />
            </div>

        </aside>
	);
}

export default Sidebar;
