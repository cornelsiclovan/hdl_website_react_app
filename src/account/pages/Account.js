import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ShoppingCart from '../../shared/components/UIElements/Shopping-cart';
import AccountMain from '../components/AccountMain';
import AccountMenu from '../components/AccountMenu';

const Account = () => {

    return (
        <React.Fragment>
            <Header />
            <Navigation />
            <AccountMenu />
            <AccountMain />
            <ShoppingCart />
            <Footer />

        </React.Fragment>
    );
}

export default Account;