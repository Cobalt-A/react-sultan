import React from "react";
import Header from "../sections/general/header";
import Footer from "../sections/general/footer";

import Catalog from "../routes/catalog";
import Order from "../routes/order";
import Product from "../routes/product";
import NotFound from "../routes/notFound";
import Admin from "../routes/admin";
import { Routes, Route } from "react-router-dom";

function MainLayout() {
  return (
    <div id="layout">
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default MainLayout;
