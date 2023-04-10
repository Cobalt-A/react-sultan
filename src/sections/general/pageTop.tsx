import React from 'react';

interface props {
    children: React.ReactNode
}

function PageTop({children}: props) {

	return (
        <section className='page-top'>
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
	);
}

export default PageTop;
