import React from 'react';
import SortBlock from '../../components/catalog/sortBlock';
import PageTop from '../general/pageTop';

function CatalogTop() {

	return (
        <PageTop>

            <div className="col-lg-6">
                <h1 className='page-title'>Косметика и гигиена</h1>
            </div>

            <div className="col-lg-6">
                <div className="catalog-block">
                    <div className="sort">
                        <SortBlock />
                    </div>
                    
                    <div className="display-block">
                        <button className='display-block__hamburger'>
                            <div className="display-block__line"></div>
                        </button>
                        <div className="display-block__icon"><img src='/assets/images/Frame 120.svg' alt="" /></div>
                    </div>
                </div>
                
            </div>

        </PageTop>
	);
}

export default CatalogTop;
