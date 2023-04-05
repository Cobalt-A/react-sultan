import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';


function NotFound() {

	return (
        <main id='main'>

            <Breadcrumbs pages={[{name: 'Каталог', route: '/', isActive: false}]} />

            <section className='page-top'>

            <div className="container">

                <div className="row">

                    <div className="col-lg-12">

                        <h1 className='page-title'>
                            Такой страницы не существует
                        </h1>
                        
                    </div>

                </div>

            </div>

            </section>

        </main>
	);
}

export default NotFound;


