import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { productSlice } from '../../store/reducer/products';
import jsontags from '../../db/tags.json'

function TagsMenu() {

    const {filterByTags} = useAppSelector(state => state.productReducer)
    const {setFilterByTags} = productSlice.actions
    const dispatch = useAppDispatch()

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

	return (
        <ul className='tags-menu'>
            {jsontags.map(tag =>
            <li key={tag.id} className='tags-menu__item'>
                <button
                    dangerouslySetInnerHTML={{__html: tag.name}}
                    datatype={String(tag.id)}
                    onClick={toggleTagFilter}
                    className={(filterByTags.find((el) => tag.id === el.id)) ? 'tags-menu__tag tags-menu__tag-active' : 'tags-menu__tag'}
                    data-testid="tag"
                ></button>
            </li>
            )}
        </ul>
	);
}

export default TagsMenu;
