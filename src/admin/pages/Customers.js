import React from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Customers = (props) => {
    return (
        <React.Fragment>
           <Header />
           <Navigation />
           <Menu customers={true}/>

           <Footer />
        </React.Fragment>
    )
}

export default Customers;