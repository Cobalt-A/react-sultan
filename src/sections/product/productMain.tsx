import React from "react";
import ProductInfo from "../../components/product/productInfo";
import { IProduct, ITags } from "../../types/types";

interface props {
  product: IProduct;
  productTags: ITags[];
  id: string | undefined;
}

function ProductMain({ product, productTags, id }: props) {
  return (
    <section className="section-product">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-6">
            <div className="product-img">
              <img src={product.imgUrl} alt="" />
            </div>
          </div>

          <div className="col-lg-8 col-xl-6">
            <ProductInfo product={product} productTags={productTags} id={id} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductMain;
