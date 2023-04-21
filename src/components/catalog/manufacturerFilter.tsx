import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { productSlice } from "../../store/reducer/products";
import { IBrands } from "../../types/types";
import jsonbrands from "../../db/brands.json";

function ManufacturerFilter() {
  const { filterByBrand, brandDropDown } = useAppSelector(
    (state) => state.productReducer
  );
  const { setFilterByBrand, setBrandDropDown } = productSlice.actions;
  const dispatch = useAppDispatch();

  const [findBrand, setFindBrand] = useState<string>("");

  const findedBrands = findBrandFilter(jsonbrands);

  function togleBrandFilter(event: React.ChangeEvent<HTMLInputElement>) {
    if (
      filterByBrand.find(
        (el) =>
          el ===
          Number((event.target as HTMLInputElement).getAttribute("datatype"))
      )
    ) {
      (event.target as HTMLInputElement).checked = false;
      const array = filterByBrand.filter(
        (el) =>
          el !==
          Number((event.target as HTMLInputElement).getAttribute("datatype"))
      );
      dispatch(setFilterByBrand(array));
      return;
    }
    (event.target as HTMLInputElement).checked = true;
    const array = Array.from(filterByBrand);
    array.push(
      Number((event.target as HTMLInputElement).getAttribute("datatype"))
    );
    dispatch(setFilterByBrand(array));
  }

  function findBrandFilter(data: IBrands[]) {
    if (!findBrand) return data;
    const array = Array.from(data);
    const result = array.filter((el) => {
      return (
        el.name
        .trim()
        .toLowerCase()
        .indexOf(findBrand) === 0
      );
    });
    return result;
  }

  function findManufacturer(event: React.ChangeEvent<HTMLInputElement>) {
    setFindBrand((event.target as HTMLInputElement).value.trim().toLowerCase());
  }

  function showAllBrands() {
    if (brandDropDown) {
      dispatch(setBrandDropDown(false));
      return;
    }
    dispatch(setBrandDropDown(true));
  }

  return (
    <div tags-menu="manufacturerFilter" className="manufacturer-filter">
      <p className="manufacturer-filter__title">Производитель</p>
      <div className="manufacturer-filter__input-container">
        <input
          onChange={findManufacturer}
          placeholder="Поиск..."
          type="text"
          className="manufacturer-filter__input"
        />
        <button className="manufacturer-filter__btn">
          <img src="/assets/images/akar-icons_search.svg" alt="" />
        </button>
      </div>
      <ul
        className={
          brandDropDown
            ? "manufacturer-menu manufacturer-menu-active"
            : "manufacturer-menu"
        }
      >
        {findedBrands.map((brand) => (
          <li key={brand.id} className="manufacturer-menu__item">
            <label className="manufacturer-menu__label">
              <input
                datatype={String(brand.id)}
                onChange={togleBrandFilter}
                className="manufacturer-menu__checkbox"
                type="checkbox"
                checked={
                  filterByBrand.find((el) => brand.id === el) ? true : false
                }
                data-testid="checkbox"
              />
              <p className="manufacturer-menu__title">{brand.name}</p>
            </label>
          </li>
        ))}
      </ul>
      {findedBrands.length > 5 && (
        <button onClick={showAllBrands} className="manufacturer-menu-btn">
          Показать все
          <img
            className="manufacturer-menu-btn__icon"
            src={
              brandDropDown
                ? "/assets/images/Polygon 4.svg"
                : "/assets/images/Polygon 5.svg"
            }
            alt=""
          />
        </button>
      )}
    </div>
  );
}

export default ManufacturerFilter;
