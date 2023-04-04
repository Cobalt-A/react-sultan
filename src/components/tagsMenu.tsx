import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { productSlice } from '../store/reducer/products';
import {ITags} from '../types/types'
import axios from 'axios'

function TagsMenu() {

    const {filterByTags} = useAppSelector(state => state.productReducer)
    const {setFilterByTags} = productSlice.actions
    const dispatch = useAppDispatch()

    const [tags, setTags] = useState<ITags[]>([])

    async function fetchTags() {
		try {
			const res = await axios.get<ITags[]>('/db/tags.json')
			setTags(res.data)
		}
		catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchTags()
	})

    function toggleTagFilter(event: React.MouseEvent) {
        if (filterByTags.find((el) => Number((event.target as HTMLButtonElement).getAttribute('datatype')) === el.id)) {
            const array = filterByTags.filter((el) => Number((event.target as HTMLButtonElement).getAttribute('datatype')) !== el.id)
            dispatch(setFilterByTags(array))
            return
        }

        const array = Array.from(filterByTags) 
        const obj: any = {
            id: Number((event.target as HTMLButtonElement).getAttribute('datatype')),
            name: (event.target as HTMLButtonElement).innerHTML
        }
        array.push(obj)
        dispatch(setFilterByTags(array))
    }

    document.querySelectorAll('.tags-menu__tag').forEach(button => {
        if (filterByTags.find((el) => Number((button as HTMLButtonElement).getAttribute('datatype')) === el.id)) {
            (button as HTMLButtonElement).style.color = '#FEC85C'
            return
        }
        (button as HTMLButtonElement).removeAttribute('style')
    })

	return (
        <ul className='tags-menu'>
            {tags.map(tag =>
            <li key={tag.id} className='tags-menu__item'>
                <button dangerouslySetInnerHTML={{__html: tag.name}} datatype={String(tag.id)} onClick={toggleTagFilter} className='tags-menu__tag' ></button>
            </li>
            )}
        </ul>
	);
}

export default TagsMenu;
