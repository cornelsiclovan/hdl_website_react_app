import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ShoppingCart from '../../shared/components/UIElements/Shopping-cart';
import AccountMenu from '../components/AccountMenu';
import ChangePasswordMain from '../components/ChangePasswordMain';

const ChangePassword = () => {

    return (
        <React.Fragment>
            <Header />
            <Navigation />
            <AccountMenu changePassword={true}/>
            <ChangePasswordMain />
            <ShoppingCart />
            <Footer />
        </React.Fragment>
    );
}

export default ChangePassword;