import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'

import Catalog from '../routes/catalog'
import Order from '../routes/order'
import Product from '../routes/product';
import NotFound from '../routes/notFound'
import { Routes, Route } from 'react-router-dom'

function MainLayout() {
	return (
        <div id="layout">
            <Header />
            
            <Routes>
                <Route path="/" element={ <Catalog /> } />
                <Route path="/order" element={ <Order/> } />
                <Route path="/product/:id" element={ <Product/> } />
                <Route path="/*" element={ <NotFound/> } />
            </Routes>
            
            <Footer />
        </div>
	);
}

export default MainLayout;
