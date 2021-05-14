import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ShoppingList from '../components/ShoppingList';
import ShoppingMain from '../components/ShoppingMain';

const ShoppingCart = () => {

    return(
        <React.Fragment>
            <Header />
            <Navigation />
            <ShoppingMain />
            <ShoppingList />
            <Footer />
        </React.Fragment>
    )
}

export default ShoppingCart;