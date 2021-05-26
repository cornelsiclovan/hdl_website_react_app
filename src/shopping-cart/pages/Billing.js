import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import BillingForm from '../components/BillingForm';
import ShoppingMain from '../components/ShoppingMain';

const Billing = () => {

    return(
        <React.Fragment>
            <Header />
            <Navigation />
            <ShoppingMain billing={true}/>
            <BillingForm />
            <Footer />
        </React.Fragment>
    );
}

export default Billing;