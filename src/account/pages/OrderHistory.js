import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ShoppingCart from '../../shared/components/UIElements/Shopping-cart';
import AccountMenu from '../components/AccountMenu';
import OrderHistoryMain from '../components/OrderHistoryMain';

const OrderHistory = () => {

    return (
        <React.Fragment>
            <Header />
            <Navigation />
            <AccountMenu />
            <ShoppingCart />
            <OrderHistoryMain />
            <Footer />
        </React.Fragment>
    );
}

export default OrderHistory;