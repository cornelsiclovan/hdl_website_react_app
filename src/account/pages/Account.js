import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ShoppingCart from '../../shared/components/UIElements/Shopping-cart';
import AccountMain from '../components/AccountMain';
import AccountMenu from '../components/AccountMenu';
import BillingForm from '../../shopping-cart/components/BillingForm';

const Account = () => {

    return (
        <React.Fragment>
            <Header />
            <Navigation />
            <AccountMenu personalSettings={true}/>
            {/* <AccountMain /> */}
            <BillingForm />
            <ShoppingCart />
            <Footer />

        </React.Fragment>
    );
}

export default Account;