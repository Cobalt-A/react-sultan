import React from "react";
import { useAppSelector } from "../../hooks/redux";
import MobileHeader from "../../components/general/mobileHeader";
import DesctopHeader from "../../components/general/desctopHeader";
import { IProduct } from "../../types/types";

function Header() {
  const { orders, products } = useAppSelector((state) => state.productReducer);

  const productOrders = products as IProduct[];

  function getPrice() {
    let summ: number = 0;
    orders.forEach((el) => {
      const order = productOrders?.find((order) => order.id === Number(el));
      if (order) {
        summ = summ + Number(order.price);
      }
    });
    return Math.round(summ * 100) / 100;
  }

  return (
    <header data-testid="header" id="header">
      <DesctopHeader orders={orders.length} price={getPrice()} />

      <MobileHeader orders={orders.length} />
    </header>
  );
}

export default Header;
