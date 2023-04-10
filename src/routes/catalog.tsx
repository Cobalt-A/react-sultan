import React from 'react';
import Breadcrumbs from '../sections/general/breadcrumbs'
import CatalogMain from '../sections/catalog/catalogMain';
import MobileSort from '../sections/catalog/mobileSort';
import MobileSidebar from '../sections/catalog/mobileSidebar';
import CatalogTags from '../sections/catalog/catalogTags';
import CatalogTop from '../sections/catalog/catalogTop';

function Catalog() {

	return (
        <main id='main'>

			<Breadcrumbs pages={[{name: 'Каталог', route: '/', isActive: true}]} />

			<CatalogTop />

			<CatalogTags />

			<MobileSidebar />

			<MobileSort />

			<CatalogMain />

		</main>
	);
}

export default Catalog;
