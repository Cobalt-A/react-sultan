import React from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../types/types";
import { useAppSelector } from "../hooks/redux";
import jsontags from "../db/tags.json";
import Breadcrumbs from "../sections/general/breadcrumbs";
import ProductTop from "../sections/product/productTop";
import ProductMain from "../sections/product/productMain";

function Product() {
  const { id } = useParams();
  const { products } = useAppSelector((state) => state.productReducer);

  const product = (products as unknown as IProduct[]).filter(
    (el) => el.id === Number(id)
  )[0];
  const productTags = jsontags.filter(
    (el) => el.id === product?.tags.find((tag) => tag === el.id)
  );

  return (
    <main id="main">
      {!product && (
        <>
          <Breadcrumbs
            pages={[
              { name: "Каталог", route: "/", isActive: false },
              { name: "Админ панель", route: "/admin", isActive: false },
            ]}
          />
          <ProductTop />
        </>
      )}

      {product && (
        <>
          <Breadcrumbs
            pages={[
              { name: "Каталог", route: "/", isActive: false },
              { name: product.title, route: "/product/" + id, isActive: true },
              { name: "Админ панель", route: "/admin", isActive: false },
            ]}
          />
          <ProductMain product={product} productTags={productTags} id={id} />
        </>
      )}
    </main>
  );
}

export default Product;
