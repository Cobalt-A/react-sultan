import React, {useState, useRef, useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { productSlice } from '../../store/reducer/products';

function SortBlock() {

    const {sortType} = useAppSelector(state => state.productReducer)
	const {setSortType} = productSlice.actions
    const dispatch = useAppDispatch()

    const [isShow, setShow] = useState<boolean>(false)
	const ref = useRef<HTMLUListElement>(null)
	const mobileRef = useRef<HTMLUListElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)
	const mobileButtonRef = useRef<HTMLButtonElement>(null)


	const clickHandler = (event:MouseEvent) => {
		if (mobileButtonRef.current?.contains(event.target as Node) || buttonRef.current?.contains(event.target as Node)) {
			return
		}

		if (!ref.current?.contains(event.target as Node) && !mobileRef.current?.contains(event.target as Node)) {
			setShow(false);
			return
		}
	}
	
    useEffect(() => {
        document.addEventListener('click', clickHandler)

        return () => {document.removeEventListener('click', clickHandler)}
    })

    function setSort(event:React.MouseEvent) {
		const type = (event.target as HTMLButtonElement).getAttribute('datatype')
		const name = (event.target as HTMLButtonElement).innerHTML
		dispatch(setSortType({
			type: type,
			name: name
		}))
		toggleMenu()
	}

    function toggleMenu() {
		setShow(!isShow);
	}

	return (
		<div data-testid="sortBlock" className="sort-block">
            <p className='sort-block__title'>Сортировка:</p>
            <button data-testid="toogleSortMenu" ref={mobileButtonRef} onClick={toggleMenu} className='sort-block__btn'>
                {sortType.name}
                <img
                    className='sort-block__icon'
                    src={isShow ? '/assets/images/Polygon 4.svg' : '/assets/images/Polygon 5.svg'}
                    alt=""
                />
            </button>
            {isShow &&
            <ul ref={mobileRef} className='sort-menu 2'>
                <li className='sort-menu__item'>
                    <button data-testid="sortBtn" onClick={setSort} datatype='sortByName' className='sort-menu__btn'>Название по возростанию</button>
                </li>
                <li className='sort-menu__item'>
                    <button data-testid="sortBtn" onClick={setSort} datatype='sortByNameDown' className='sort-menu__btn'>Название по убыванию</button>
                </li>
                <li className='sort-menu__item'>
                    <button data-testid="sortBtn" onClick={setSort} datatype='sortByPrice' className='sort-menu__btn'>Цена по возростанию</button>
                </li>
                <li className='sort-menu__item'>
                    <button data-testid="sortBtn" onClick={setSort} datatype='sortByPriceDown' className='sort-menu__btn'>Цена по убыванию</button>
                </li>
            </ul>
            }
        </div>
	);
}

export default SortBlock;