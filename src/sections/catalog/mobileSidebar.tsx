import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { productSlice } from '../../store/reducer/products';
import Sidebar from '../../components/catalog/sidebar';

function MobileSidebar() {

    const {mobileSidebarDropDown} = useAppSelector(state => state.productReducer)
	const {setMobileSidebarDropDown} = productSlice.actions
    const dispatch = useAppDispatch()


	function toogleSidebar() {
		if (mobileSidebarDropDown) {
			dispatch(setMobileSidebarDropDown(false))
			return
		}
		dispatch(setMobileSidebarDropDown(true))
	}

	return (
        <section className='mobile-tags'>
            <div className="container">
                <div className="mobile-tags-title">
                    <h3 className='mobile-tags-title__title'>ПОДБОР ПО ПАРАМЕТРАМ</h3>
                    <button onClick={toogleSidebar} className='mobile-tags-title__btn'>
                        <img src={mobileSidebarDropDown ? '/assets/images/Vector 24 (1).svg' : '/assets/images/Vector 24 2.svg'} alt="" />
                    </button>
                </div>

                <div className={mobileSidebarDropDown ? 'mobile-sidebar-wrapper mobile-sidebar-wrapper-active' : 'mobile-sidebar-wrapper'}>
                    {mobileSidebarDropDown &&
                        <Sidebar />
                    }
                </div>

            </div>
        </section>
	);
}

export default MobileSidebar;
