import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ProductMain from '../components/ProductMain';

const Product = () => {

    return(
        <React.Fragment>
            <Header />
            <Navigation />
            <ProductMain />
            <Footer />
        </React.Fragment>
    );
}

export default Product;
