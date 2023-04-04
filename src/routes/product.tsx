import React, { useEffect, useState } from 'react';
import {IProduct, ITags} from '../types/types'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { productSlice } from '../store/reducer/products';
import Breadcrumbs from '../components/breadcrumbs'

function Product() {

    const {orders} = useAppSelector(state => state.productReducer)
    const {setOrder} = productSlice.actions
    const dispatch = useAppDispatch()

    const { id } = useParams()
    const [product, setProduct] = useState<IProduct | undefined>()
    const [productTags, setProductTags] = useState<ITags[]>()

    async function fetchProduct() {
		try {
			const res = await axios.get<IProduct[]>('/db/products.json')

            const productById = res.data.filter(el => el.id === Number(id))

            if (!productById.length) {
                setProduct(undefined)
            }

			setProduct(productById[0])
		}
		catch (error) {
			console.error(error)
		}
	}

    async function fetchTags() {
		try {
			const res = await axios.get<ITags[]>('/db/tags.json')
            const data = res.data.filter(el => el.id === product?.tags.find(tag => tag === el.id))
			setProductTags(data)
		}
		catch (error) {
			console.error(error)
		}
	}

    useEffect(() => {
		fetchProduct()
        fetchTags()
	})
    
    function addOrder() {
        const array = Array.from(orders)
        array.push(id)
        dispatch(setOrder(array))
    }

    function deleteOrder() {
        const array = Array.from(orders)
        array.splice(array.indexOf(id), 1)
        dispatch(setOrder(array))
    }


	return (

			<main id='main'>

                {!product &&
                    <Breadcrumbs pages={[{name: 'Каталог', route: '/', isActive: false}]} />
                }

                {product &&
                    <Breadcrumbs pages={[{name: 'Каталог', route: '/', isActive: false}, {name: product.title, route: '/product/'+id, isActive: true}]} />
                }

                {product &&

                <section className='section-product'>

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-4 col-xl-6">

                                <div className="product-img">
                                    <img src={product.imgUrl} alt="" />
                                </div>

                            </div>

                            <div className="col-lg-8 col-xl-6">

                                <div className="product-info">

                                    <p className='product-info__stock'>В наличии</p>

                                    <p className='product-info__title'><strong>{product.brend}</strong> {product.title}</p>

                                    <p className="product-info__mass"><img className='product-info__mass-icon' src={product.volumeIcon} alt="" />{product.volume}</p>

                                    <div className="product-info__row">

                                        <div className="product-price">
											<p className='product-price__price'>{product.price} {product.currency}</p>
										</div>

                                        <div className="order-amount">
											<button onClick={deleteOrder} className='order-amount__btn order-amount__decrease'>-</button>
											<p className='order-amount__amount'>{orders.filter(el => el === id).length}</p>
											<button onClick={addOrder} className='order-amount__btn order-amount__increase'>+</button>
										</div>

                                        <button onClick={addOrder} className='order-button'>
                                            В корзину
                                            <img className='order-button__icon' src={require('../assets/images/simple-line-icons_basket (1).svg').default} alt="" />
                                        </button>

                                        <button className="product-share">
                                            <img src={require('../assets/images/ci_share.svg').default} alt="" />
                                        </button>

                                        <button className="product-promo">
                                            При покупке от <strong>10 000 ₸</strong> бесплатная доставка по Кокчетаву и области
                                        </button>

                                        <button className="price-list">
                                            Прайс-лист
                                            <img className='price-list__icon' src={require('../assets/images/bx_bxs-download.svg').default} alt="" />
                                        </button>

                                    </div>

                                    <div className="product-info__block">

                                        <ul className='product-info-menu'>
                                            {(productTags?.length !== 0) &&
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Тип: {productTags?.map(tag =>
                                                    <span key={tag.id}>{tag.name.replace('<br/>', ' ') + ', '}</span> 
                                                )}</p>
                                            </li>
                                            }
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Штрихкод: <span>{product.barcode}</span></p>
                                            </li>
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Производитель: <span>{product.manufacturer}</span></p>
                                            </li>
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Бренд: <span>{product.brend}</span></p>
                                            </li>
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Артикул: <span>{product.barcode}</span></p>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="product-description">
                                        <button className='product-info-btn'>
                                            Описание<img className='product-info-btn__icon' src={require('../assets/images/Polygon 4.svg').default} alt="" />
                                        </button>
                                        <p className='product-description-text'>
                                            {product.description}
                                        </p>
                                    </div>

                                    <hr />

                                    <div className="product-info__block">

                                        <button className='product-info-btn'>
                                            Характеристики<img className='product-info-btn__icon' src={require('../assets/images/Polygon 4.svg').default} alt="" />
                                        </button>

                                        <ul className='product-info-menu'>
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Бренд: <span>{product.barcode}</span></p>
                                            </li>
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Артикул: <span>{product.barcode}</span></p>
                                            </li>
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Штрихкод: <span>{product.barcode}</span></p>
                                            </li>
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Объем: <span>{product.volume}</span></p>
                                            </li>
                                            <li className='product-info-menu__item'>
                                                <p className='product-info-menu__title'>Кол-во в коробке: <span>1</span></p>
                                            </li>
                                        </ul>

                                    </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                </section>

                }

			</main>
	);
}

export default Product;


