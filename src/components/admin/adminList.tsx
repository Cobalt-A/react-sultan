import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { productSlice } from "../../store/reducer/products";
import { IProduct } from "../../types/types";

function AdminList() {
  const { products } = useAppSelector((state) => state.productReducer);
  const { redactProducts, setProducts } = productSlice.actions;
  const dispatch = useAppDispatch();

  const prods = Array.from(products) as unknown as IProduct[];

  function Input(event: React.FormEvent) {
    const id = (event.target as HTMLButtonElement).getAttribute("datatype");
    const value = (event.target as HTMLButtonElement).value;
    const key = (event.target as HTMLButtonElement).getAttribute("name");

    dispatch(redactProducts({ id: id, value: value, key: key }));
  }

  function deleteProduct(event: React.MouseEvent) {
    const id = (event.target as HTMLButtonElement).getAttribute("datatype");
    const array = Array.from(products) as IProduct[];
    const filtredArray = array.filter((el) => el.id !== Number(id));

    dispatch(setProducts(filtredArray));
  }

  function addProduct() {
    const array = Array.from(products) as IProduct[];
    const id = Math.round(Math.random() * 1000000);
    array.push({
      id: id,
      imgUrl: "",
      volume: "",
      volumeIcon: "/assets/images/Vector (6).svg",
      title: "",
      description: "",
      barcode: `${id}`,
      manufacturer: "",
      brend: "",
      price: "0",
      currency: "₸",
      tags: [],
      brand: [],
      inStock: false,
    });
    dispatch(setProducts(array));
  }

  return (
    <section className="container">
      <ul className="admin-list">
        {prods.map((order) => (
          <li key={order.id} className="admin-list__item">
            <article className="admin-product">
              <div className="admin-product__input-group">
                <label className="admin-product__label" htmlFor="title">
                  Название:
                </label>
                <input
                  className="admin-product__input"
                  id="title"
                  name="title"
                  type="text"
                  defaultValue={order.title}
                  datatype={`${order.id}`}
                  onInput={Input}
                />
              </div>
              <div className="admin-product__input-group">
                <label className="admin-product__label" htmlFor="brend">
                  Брэнд:
                </label>
                <input
                  className="admin-product__input"
                  id="brend"
                  name="brend"
                  type="text"
                  defaultValue={order.brend}
                  datatype={`${order.id}`}
                  onInput={Input}
                />
              </div>
              <div className="admin-product__input-group">
                <label className="admin-product__label" htmlFor="imgUrl">
                  Url картинки:
                </label>
                <input
                  className="admin-product__input"
                  id="imgUrl"
                  name="imgUrl"
                  type="text"
                  defaultValue={order.imgUrl}
                  datatype={`${order.id}`}
                  onInput={Input}
                />
              </div>
              <div className="admin-product__input-group">
                <label className="admin-product__label" htmlFor="price">
                  Стоимость:
                </label>
                <input
                  className="admin-product__input"
                  id="price"
                  name="price"
                  type="number"
                  defaultValue={order.price}
                  datatype={`${order.id}`}
                  onInput={Input}
                />
              </div>
              <div className="admin-product__input-group">
                <label className="admin-product__label" htmlFor="volume">
                  Обьем:
                </label>
                <input
                  className="admin-product__input"
                  id="volume"
                  name="volume"
                  type="number"
                  defaultValue={order.volume}
                  datatype={`${order.id}`}
                  onInput={Input}
                />
              </div>
              <div className="admin-product__input-group">
                <label className="admin-product__label" htmlFor="volume">
                  Описание:
                </label>
                <textarea
                  className="admin-product__textarea"
                  id="description"
                  name="description"
                  defaultValue={order.description}
                  datatype={`${order.id}`}
                  onInput={Input}
                />
              </div>
              <div className="admin-product__row">
                <label className="admin-product__label" htmlFor="inStock">
                  Наличие:
                </label>
                <input
                  className="admin-product__checkbox"
                  id="inStock"
                  name="inStock"
                  type="checkbox"
                  defaultChecked={order.inStock}
                  datatype={`${order.id}`}
                  onInput={Input}
                />
              </div>
              <button
                datatype={`${order.id}`}
                onClick={deleteProduct}
                className="app-btn"
              >
                Удалить
              </button>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={addProduct} className="app-btn add-product">
        Добавить продукт
      </button>
    </section>
  );
}

export default AdminList;
