import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { productSlice } from "../../store/reducer/products";
import { ITags, IProduct } from "../../types/types";
import ProductDescription from "./productDescription";
import ProductCharacteristics from "./productCharacteristics";
import ProductInfoBlock from "./productInfoBlock";

interface props {
  product: IProduct;
  productTags: ITags[];
  id: string | undefined;
}

function ProductInfo({ product, productTags, id }: props) {
  const { orders } = useAppSelector((state) => state.productReducer);
  const { setOrder } = productSlice.actions;
  const dispatch = useAppDispatch();

  function addOrder() {
    const array = Array.from(orders);
    array.push(id);
    dispatch(setOrder(array));
  }

  function deleteOrder() {
    const array = Array.from(orders);
    array.splice(array.indexOf(id), 1);
    dispatch(setOrder(array));
  }

  return (
    <div className="product-info">
      {product.inStock && <p className="product-info__stock">В наличии</p>}

      {!product.inStock && (
        <p style={{ color: "red" }} className="product-info__stock">
          Нет в наличии
        </p>
      )}

      <p className="product-info__title">
        <strong>{product.brend}</strong> {product.title}
      </p>

      <p className="product-info__mass">
        <img
          className="product-info__mass-icon"
          src={product.volumeIcon}
          alt=""
        />
        {product.volume} мл
      </p>

      <div className="product-info__row">
        <div className="product-price">
          <p data-testid="price" className="product-price__price">
            {product.price} {product.currency}
          </p>
        </div>

        <div className="order-amount">
          <button
            data-testid="deleteOrder"
            onClick={deleteOrder}
            className="order-amount__btn order-amount__decrease"
          >
            -
          </button>
          <p data-testid="amount" className="order-amount__amount">
            {orders.filter((el) => el === id).length}
          </p>
          <button
            data-testid="addOrder"
            onClick={addOrder}
            className="order-amount__btn order-amount__increase"
          >
            +
          </button>
        </div>

        <button data-testid="order" onClick={addOrder} className="order-button">
          В корзину
          <img
            className="order-button__icon"
            src="/assets/images/simple-line-icons_basket (1).svg"
            alt=""
          />
        </button>

        <button className="product-share">
          <img src="/assets/images/ci_share.svg" alt="" />
        </button>

        <button className="product-promo">
          При покупке от <strong>10 000 ₸</strong> бесплатная доставка по
          Кокчетаву и области
        </button>

        <button className="price-list">
          Прайс-лист
          <img
            className="price-list__icon"
            src="/assets/images/bx_bxs-download.svg"
            alt=""
          />
        </button>
      </div>

      <ProductInfoBlock product={product} productTags={productTags} />

      <ProductDescription description={product.description} />

      <hr />

      <ProductCharacteristics product={product} />
    </div>
  );
}

export default ProductInfo;
